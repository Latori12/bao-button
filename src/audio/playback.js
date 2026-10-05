// Keep one playback entry across repeats; stop also cancels pending play().
export function trackAudioPlayback(audio, { shouldLoop, onPlaying, onFinished, onError }) {
    let stopped = false;
    let repeats = 0;
    function stop() {
        stopped = true;
        audio.onended = null;
        audio.onerror = null;
        audio.pause();
    }
    function finish(error) {
        if (stopped) return;
        stop();
        if (error) onError?.(error);
        onFinished();
    }
    async function play(repeating = false) {
        try {
            if (repeating) audio.currentTime = 0;
            await audio.play();
            if (stopped) {
                audio.pause();
                return;
            }
            if (repeating) repeats++;
            onPlaying(repeats);
        } catch (error) {
            finish(error);
        }
    }
    audio.onended = () => {
        if (stopped) return;
        if (shouldLoop()) play(true);
        else finish();
    };
    audio.onerror = () => finish(audio.error || new Error('音频播放错误'));
    play();
    return { stop };
}
