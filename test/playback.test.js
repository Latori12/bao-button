import test from 'node:test';
import assert from 'node:assert/strict';
import { setImmediate as nextTurn } from 'node:timers/promises';
import { trackAudioPlayback } from '../src/audio/playback.js';

function fakeAudio(play = () => Promise.resolve()) {
    return { play, pause() { this.paused = true; }, currentTime: 4, paused: false };
}

test('repeat count is per playback and increases only after a successful restart', async () => {
    let loop = true;
    let finished = 0;
    const seen = [];
    const audio = fakeAudio();
    trackAudioPlayback(audio, {
        shouldLoop: () => loop, onPlaying: repeats => seen.push(repeats),
        onFinished: () => finished++,
    });
    await nextTurn();
    assert.deepEqual(seen, [0]);
    audio.onended();
    await nextTurn();
    assert.deepEqual(seen, [0, 1]);
    assert.equal(audio.currentTime, 0);
    audio.onended();
    await nextTurn();
    assert.deepEqual(seen, [0, 1, 2]);
    loop = false;
    audio.onended();
    assert.equal(finished, 1);
    assert.equal(audio.onended, null);
});

test('same voice played twice has independent repeat counters', async () => {
    const counts = [[], []];
    const audios = counts.map((seen) => {
        const audio = fakeAudio();
        trackAudioPlayback(audio, { shouldLoop: () => true,
            onPlaying: repeats => seen.push(repeats), onFinished() {} });
        return audio;
    });
    await nextTurn();
    audios[0].onended();
    await nextTurn();
    assert.deepEqual(counts, [[0, 1], [0]]);
});

test('stopping while play is pending cannot add a ghost playing entry', async () => {
    let resolve;
    let updates = 0;
    const audio = fakeAudio(() => new Promise(done => { resolve = done; }));
    const playback = trackAudioPlayback(audio, { shouldLoop: () => true,
        onPlaying: () => updates++, onFinished() {} });
    const ended = audio.onended;
    playback.stop();
    resolve();
    await nextTurn();
    ended();
    assert.equal(updates, 0);
    assert.equal(audio.paused, true);
    assert.equal(audio.onended, null);
});

test('failed initial playback or repeat cleans up exactly once without incrementing', async () => {
    for (const rejectFirst of [true, false]) {
        let calls = 0;
        let finished = 0;
        let errors = 0;
        const counts = [];
        const audio = fakeAudio(() => ++calls === 1 && !rejectFirst
            ? Promise.resolve() : Promise.reject(new Error('blocked')));
        trackAudioPlayback(audio, { shouldLoop: () => true,
            onPlaying: repeats => counts.push(repeats),
            onFinished: () => finished++, onError: () => errors++ });
        await nextTurn();
        if (!rejectFirst) { audio.onended(); await nextTurn(); }
        assert.deepEqual(counts, rejectFirst ? [] : [0]);
        assert.equal(finished, 1);
        assert.equal(errors, 1);
        assert.equal(audio.onerror, null);
    }
});
