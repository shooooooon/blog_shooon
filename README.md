# Shooon Blog - 初心者向けシンプルブログ

初心者でも簡単に運用できるシンプルな技術ブログです。ビルドツール不要、プレーンなHTML/CSS/JavaScriptで動作します。

## 特徴

- **初心者に優しい**: ビルドコマンド不要、Node.js不要
- **シンプルな構成**: HTML、CSS、JavaScriptのみ
- **簡単な記事管理**: JSONファイルに記事を追加するだけ
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップに対応
- **すぐに使える**: ブラウザで直接開いて確認できる（ローカルサーバー推奨）

## プロジェクト構成

```
blog_shooon/
├── index.html          # トップページ（最新記事3件表示）
├── posts.html          # 記事一覧（タグフィルター付き）
├── post.html           # 記事詳細ページ
├── about.html          # 自己紹介ページ
├── css/
│   └── style.css       # メインスタイル
├── js/
│   ├── main.js         # 共通機能
│   ├── posts.js        # 記事一覧の表示
│   └── post.js         # 記事詳細の表示
└── data/
    └── posts.json      # 記事データ
```

## 使い方

### 1. ローカルで確認する

シンプルなHTMLサイトなので、以下の方法で確認できます：

**方法1: Pythonのシンプルサーバー（推奨）**
```bash
# プロジェクトディレクトリで実行
python3 -m http.server 8000
```

ブラウザで http://localhost:8000 を開く

**方法2: VS Code Live Server拡張機能**
- VS Codeで `index.html` を開く
- 右クリック → "Open with Live Server"

**方法3: Node.jsのhttp-server**
```bash
npx http-server -p 8000
```

### 2. 記事を追加する

`data/posts.json` ファイルを編集して、記事を追加します：

```json
{
  "posts": [
    {
      "id": "11",
      "slug": "new-article",
      "title": "新しい記事のタイトル",
      "excerpt": "記事の要約を書きます",
      "content": "# 記事のタイトル\n\n記事の本文をMarkdown形式で書きます。\n\n## 見出し2\n\n段落を書きます。",
      "date": "2025-03-10",
      "readTime": "5分",
      "tags": ["タグ1", "タグ2"]
    }
  ]
}
```

#### 記事のプロパティ

- **id**: 記事の一意なID（文字列）
- **slug**: URL用のスラッグ（記事の識別子）
- **title**: 記事のタイトル
- **excerpt**: 記事の要約（カード表示に使用）
- **content**: 記事の本文（Markdown形式）
- **date**: 投稿日（YYYY-MM-DD形式）
- **readTime**: 読了時間（例: "5分"）
- **tags**: タグの配列

#### Markdownの書き方

記事の本文は、以下のMarkdown記法が使えます：

```markdown
# 見出し1
## 見出し2
### 見出し3

**太字**
*イタリック*

[リンクテキスト](https://example.com)

`インラインコード`

\`\`\`
コードブロック
\`\`\`

- 箇条書き1
- 箇条書き2
```

### 3. デザインをカスタマイズする

`css/style.css` を編集して、デザインを変更できます。主要な色やスタイルは以下の部分で設定されています：

- **メインカラー**: `.hero` のグラデーション、`.btn` の背景色
- **フォント**: `body` の `font-family`
- **レイアウト**: `.container` の `max-width`

## ページ一覧

| ページ | ファイル | 説明 |
|--------|----------|------|
| トップページ | `index.html` | 最新記事3件を表示 |
| 記事一覧 | `posts.html` | 全記事とタグフィルター |
| 記事詳細 | `post.html` | 記事の全文表示 |
| 自己紹介 | `about.html` | プロフィール |

## デプロイ方法

このサイトは静的HTMLなので、様々なホスティングサービスで簡単にデプロイできます：

### GitHub Pages

1. GitHubリポジトリの Settings → Pages を開く
2. Source を "Deploy from a branch" に設定
3. Branch を選択（例: `main`、フォルダは `/root`）
4. Save をクリック

数分後、`https://ユーザー名.github.io/リポジトリ名/` でアクセスできます

### Netlify

1. [Netlify](https://www.netlify.com/) にログイン
2. "Add new site" → "Deploy manually"
3. プロジェクトフォルダをドラッグ&ドロップ
4. 自動的にデプロイされます

### Vercel

1. [Vercel](https://vercel.com/) にログイン
2. "Add New" → "Project"
3. GitHubリポジトリを選択
4. Framework Preset は "Other" を選択
5. "Deploy" をクリック

## よくある質問

### Q: ビルドコマンドは必要ですか？

A: いいえ、必要ありません。HTMLファイルをブラウザで直接開けます（ローカルサーバー推奨）。

### Q: Node.jsは必要ですか？

A: いいえ、必要ありません。すべてブラウザで動作します。

### Q: 記事の順番はどうなっていますか？

A: 記事は `date` フィールドの新しい順に表示されます。

### Q: 画像を追加したい場合は？

A: プロジェクトに `images` フォルダを作成し、そこに画像を配置してください。記事内で `![説明](images/ファイル名.jpg)` のように参照できます。

### Q: CSSフレームワークは使っていますか？

A: いいえ、プレーンなCSSのみを使用しています。初心者でも理解しやすいシンプルな構成です。

## 技術スタック

- **HTML5**: セマンティックなマークアップ
- **CSS3**: レスポンシブデザイン
- **Vanilla JavaScript**: フレームワーク不要
- **JSON**: 記事データの管理

## カスタマイズのヒント

### 色を変更する

`css/style.css` の以下の部分を変更：

```css
/* ヒーローセクションの背景 */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* ボタンの色 */
.btn {
    background-color: #2563eb;
}
```

### 自己紹介ページを編集する

`about.html` を直接編集して、あなたのプロフィールに変更してください。

### フッターを変更する

各HTMLファイルの `<footer>` 部分を編集してください。

## ライセンス

MIT License

## 作者

**Shooon**

- GitHub: [@shooooooon](https://github.com/shooooooon)

---

シンプルで運用しやすいブログをお楽しみください！
