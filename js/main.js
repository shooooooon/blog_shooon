// 共通のユーティリティ関数

// 記事データを取得
async function fetchPosts() {
    try {
        const response = await fetch('data/posts.json');
        if (!response.ok) {
            throw new Error('記事データの取得に失敗しました');
        }
        const data = await response.json();
        return data.posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

// 記事カードを作成
function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';

    const tagsHTML = post.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');

    card.innerHTML = `
        <h3 class="post-card-title">${post.title}</h3>
        <p class="post-card-excerpt">${post.excerpt}</p>
        <div class="post-card-tags">${tagsHTML}</div>
        <div class="post-card-meta">
            <span>${post.date}</span>
            <span>${post.readTime}</span>
        </div>
        <a href="post.html?id=${post.id}" class="btn">続きを読む</a>
    `;

    return card;
}

// トップページの最新記事を表示
async function displayRecentPosts() {
    const container = document.getElementById('recent-posts');
    if (!container) return;

    const posts = await fetchPosts();

    if (posts.length === 0) {
        container.innerHTML = '<p class="loading">記事がありません</p>';
        return;
    }

    // 最新3件を表示
    const recentPosts = posts.slice(0, 3);
    container.innerHTML = '';

    recentPosts.forEach(post => {
        const card = createPostCard(post);
        container.appendChild(card);
    });
}

// ページ読み込み時に実行
if (document.getElementById('recent-posts')) {
    displayRecentPosts();
}
