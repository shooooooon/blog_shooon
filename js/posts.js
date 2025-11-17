// 記事一覧ページのスクリプト

let allPosts = [];
let currentTag = 'all';

// すべての記事を表示
async function displayAllPosts() {
    const container = document.getElementById('all-posts');
    if (!container) return;

    allPosts = await fetchPosts();

    if (allPosts.length === 0) {
        container.innerHTML = '<p class="loading">記事がありません</p>';
        return;
    }

    // タグフィルターを生成
    generateTagFilter();

    // すべての記事を表示
    renderPosts(allPosts);
}

// タグフィルターを生成
function generateTagFilter() {
    const filterContainer = document.getElementById('tag-filter');
    if (!filterContainer) return;

    // すべてのタグを収集
    const allTags = new Set();
    allPosts.forEach(post => {
        post.tags.forEach(tag => allTags.add(tag));
    });

    // タグボタンを生成
    const sortedTags = Array.from(allTags).sort();
    sortedTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-btn';
        button.textContent = tag;
        button.dataset.tag = tag;
        button.addEventListener('click', () => filterByTag(tag));
        filterContainer.appendChild(button);
    });
}

// タグでフィルタリング
function filterByTag(tag) {
    currentTag = tag;

    // ボタンのアクティブ状態を更新
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tag === tag) {
            btn.classList.add('active');
        }
    });

    // 記事をフィルタリング
    if (tag === 'all') {
        renderPosts(allPosts);
    } else {
        const filteredPosts = allPosts.filter(post =>
            post.tags.includes(tag)
        );
        renderPosts(filteredPosts);
    }
}

// 記事を描画
function renderPosts(posts) {
    const container = document.getElementById('all-posts');
    if (!container) return;

    if (posts.length === 0) {
        container.innerHTML = '<p class="loading">該当する記事がありません</p>';
        return;
    }

    container.innerHTML = '';
    posts.forEach(post => {
        const card = createPostCard(post);
        container.appendChild(card);
    });
}

// ページ読み込み時に実行
if (document.getElementById('all-posts')) {
    displayAllPosts();
}
