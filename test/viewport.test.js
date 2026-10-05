import test from 'node:test';
import assert from 'node:assert/strict';
import { landscapeLayout } from '../src/ui/viewportLayout.js';

test('desktop landscape composition fits narrow, tall and ultrawide windows', () => {
    for (const [width, height] of [[1280, 720], [1920, 1080], [2560, 1440],
        [1920, 960], [2560, 1270], [1536, 746],
        [1920, 1200], [1024, 768], [3440, 1440], [3840, 1080]]) {
        const { scene, frame } = landscapeLayout(width, height);
        assert.equal(scene, true);
        assert.ok(frame.left >= 0 && frame.top >= 0);
        assert.ok(frame.width > 0 && frame.height > 0);
        assert.ok(frame.left + frame.width <= width);
        assert.ok(frame.top + frame.height <= height);
    }
});

test('published screenshot geometry is preserved in a 2560 by 1270 browser window', () => {
    const { frame, photo } = landscapeLayout(2560, 1270);
    // Measurements taken from wangbaobao.moe in the same browser viewport.
    const measured = { left: 94.296875, top: 69.84375, width: 2341.390625, height: 1104.890625 };
    for (const key of Object.keys(measured)) assert.ok(Math.abs(frame[key] - measured[key]) < 0.02);
    assert.ok(Math.abs(photo.width - 2616.19) < 0.02);
    assert.ok(Math.abs(photo.height - 1308.09) < 0.02);
});

test('the centered photo covers landscape windows without changing its aspect ratio', () => {
    for (const [width, height] of [[1920, 1080], [2560, 1270], [1024, 768], [3440, 1440]]) {
        const { photo } = landscapeLayout(width, height);
        assert.ok(photo.width >= width && photo.height >= height);
        assert.equal(photo.width / photo.height, 2);
    }
});

test('phone landscape, short windows and portrait retain readable flow layout', () => {
    for (const [width, height] of [[844, 390], [667, 375], [1920, 480], [390, 844], [1000, 1000]]) {
        assert.deepEqual(landscapeLayout(width, height), { scene: false });
    }
});
