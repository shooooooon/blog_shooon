// 記事詳細ページのスクリプト

// URLパラメータから記事IDを取得
function getPostIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// MarkdownをシンプルなHTMLに変換（基本的な変換のみ）
function markdownToHTML(markdown) {
    let html = markdown;

    // 見出し
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // 太字
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

    // イタリック
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

    // リンク
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

    // コードブロック
    html = html.replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>');

    // インラインコード
    html = html.replace(/`(.*?)`/gim, '<code>$1</code>');

    // 箇条書き
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // 段落（改行2つで区切る）
    const paragraphs = html.split('\n\n');
    html = paragraphs.map(p => {
        p = p.trim();
        if (p && !p.startsWith('<')) {
            return `<p>${p}</p>`;
        }
        return p;
    }).join('\n');

    return html;
}

// 記事詳細を表示
async function displayPostDetail() {
    const container = document.getElementById('post-content');
    if (!container) return;

    const postId = getPostIdFromURL();
    if (!postId) {
        container.innerHTML = '<p class="loading">記事が見つかりません</p>';
        return;
    }

    const posts = await fetchPosts();
    const post = posts.find(p => p.id === postId);

    if (!post) {
        container.innerHTML = '<p class="loading">記事が見つかりません</p>';
        return;
    }

    // ページタイトルを更新
    document.title = `${post.title} - Shooon Blog`;

    // 記事の内容を表示
    const tagsHTML = post.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join('');

    const contentHTML = markdownToHTML(post.content);

    container.innerHTML = `
        <h1>${post.title}</h1>
        <div class="post-card-tags">${tagsHTML}</div>
        <div class="post-detail-meta">
            <span>投稿日: ${post.date}</span>
            <span>読了時間: ${post.readTime}</span>
        </div>
        <div class="post-detail-content">
            ${contentHTML}
        </div>
    `;
}

// ページ読み込み時に実行
if (document.getElementById('post-content')) {
    displayPostDetail();
}
