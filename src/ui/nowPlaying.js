export function renderNowPlaying(playingAudios) {
    const list = document.getElementById('nowPlayingList');
    if (!list) return;
    const entries = [...playingAudios.entries()].filter(([, item]) => item.playing);
    const scrollTop = list.scrollTop;
    const fragment = document.createDocumentFragment();
    for (const [id, item] of entries) {
        const row = document.createElement('li');
        row.className = 'now-playing-row';
        row.dataset.playbackId = id;
        const title = document.createElement('span');
        title.className = 'now-playing-title';
        title.textContent = item.title;
        title.title = item.title;
        const category = document.createElement('span');
        category.className = 'now-playing-category';
        category.textContent = item.category;
        category.title = item.category;
        const repeats = document.createElement('span');
        repeats.className = 'now-playing-repeats';
        repeats.textContent = `循环 ${item.repeats} 次`;
        row.append(title, category, repeats);
        fragment.appendChild(row);
    }
    if (!entries.length) {
        const empty = document.createElement('li');
        empty.className = 'now-playing-empty';
        empty.textContent = '暂无正在播放的语音';
        fragment.appendChild(empty);
    }
    list.replaceChildren(fragment);
    list.scrollTop = scrollTop;
}
