// Preserve the published desktop geometry and CSS-pixel control sizes.
// Only the available frame and background respond to window dimensions.

export function landscapeLayout(width, height) {
    const scene = width >= 1000 && height >= 560 && width > height;
    if (!scene) return { scene: false };
    const halfWidth = Math.min(0.4522 * width, 0.91 * height);
    const frame = {
        left: width / 2 - halfWidth - 30,
        top: height / 2 - Math.min(0.435 * height, 0.21625 * width) - 0.01 * height,
        width: 2 * halfWidth + 30,
        height: Math.min(0.87 * height, 0.4325 * width),
    };
    // Use the extra available area on unusual landscape proportions.
    // Ordinary desktop windows retain the published frame exactly.
    if (width / height > 2.25) {
        frame.left = 0.03 * width;
        frame.width = 0.94 * width;
    } else if (width / height < 1.6) {
        frame.top = 0.055 * height;
        frame.height = 0.87 * height;
    }
    const photoWidth = Math.max(Math.min(1.023125 * width, 2.06 * height), width, 2 * height);
    return { scene: true, frame, photo: { width: photoWidth, height: photoWidth / 2 } };
}

function updateViewportLayout() {
    const root = document.documentElement;
    const { scene, frame, photo } = landscapeLayout(root.clientWidth, window.innerHeight);
    root.dataset.layout = scene ? 'scene' : 'flow';
    if (frame) {
        for (const key of ['left', 'top', 'width', 'height']) {
            root.style.setProperty(`--frame-${key}`, `${frame[key]}px`);
        }
        root.style.setProperty('--photo-width', `${photo.width}px`);
        root.style.setProperty('--photo-height', `${photo.height}px`);
    }
}

if (typeof window !== 'undefined') {
    updateViewportLayout();
    window.addEventListener('resize', updateViewportLayout, { passive: true });
}
