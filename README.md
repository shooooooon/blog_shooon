# Shooon Blog

モダンで高速、ミニマルなデザインの個人ブログサイトです。技術、学び、日々の気づきを綴ります。

## 🚀 特徴

- **モダンな技術スタック**: Vite + React 19 + TypeScript
- **ミニマルデザイン**: Tailwind CSS 4による洗練されたUI
- **高速**: 静的サイト生成による高速な読み込み
- **レスポンシブ**: モバイル・タブレット・デスクトップに完全対応
- **SEO最適化**: メタタグ、OGP設定済み
- **簡単な記事管理**: Markdownベースの記事管理

## 📁 プロジェクト構成

```
shooon_blog/
├── client/
│   ├── src/
│   │   ├── pages/          # ページコンポーネント
│   │   │   ├── Home.tsx    # トップページ
│   │   │   ├── Posts.tsx   # 記事一覧
│   │   │   ├── PostDetail.tsx # 記事詳細
│   │   │   └── About.tsx   # 自己紹介
│   │   ├── components/     # 再利用可能なコンポーネント
│   │   │   ├── Header.tsx  # ヘッダーナビゲーション
│   │   │   └── Footer.tsx  # フッター
│   │   ├── data/
│   │   │   └── posts.ts    # 記事データ
│   │   └── index.css       # グローバルスタイル
│   └── index.html
├── BLOG_MANAGEMENT.md      # 記事管理ガイド
└── README.md
```

## 🛠️ 技術スタック

- **フレームワーク**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS 4](https://tailwindcss.com/)
- **ルーティング**: [Wouter](https://github.com/molefrog/wouter)
- **UIコンポーネント**: [shadcn/ui](https://ui.shadcn.com/)
- **Markdownレンダリング**: [Streamdown](https://github.com/remorses/streamdown)

## 🚀 開発環境のセットアップ

### 前提条件

- Node.js 20以上
- pnpm

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/shooooooon/blog_shooon.git
cd blog_shooon

# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

ブラウザで http://localhost:3000 を開いてください。

### ビルド

```bash
# 本番用ビルド
pnpm build

# ビルドしたファイルをプレビュー
pnpm preview
```

## ✍️ 記事の管理

記事の追加・編集方法については、[BLOG_MANAGEMENT.md](./BLOG_MANAGEMENT.md) を参照してください。

### クイックスタート

記事は `client/src/data/posts.ts` で管理されています。

```typescript
{
  id: "11",
  slug: "my-new-post",
  title: "新しい記事のタイトル",
  excerpt: "記事の要約",
  content: `# 記事の内容をMarkdownで書く`,
  date: "2025-03-15",
  readTime: "5分",
  tags: ["タグ1", "タグ2"]
}
```

## 📝 ページ構成

| ページ | パス | 説明 |
|--------|------|------|
| トップページ | `/` | ヒーローセクション + 最新記事3件 |
| 記事一覧 | `/posts` | 全記事の一覧（タグフィルター付き） |
| 記事詳細 | `/posts/:slug` | 個別記事の表示 |
| 自己紹介 | `/about` | プロフィールとスキル |

## 🎨 デザイン

- **フォント**: Inter（Google Fonts）
- **カラースキーム**: ライトモード中心のクリーンな配色
- **レイアウト**: 余白を活かしたミニマルデザイン
- **レスポンシブ**: モバイルファースト設計

## 🔄 GitHub連携

このプロジェクトは、ManusとGitHubの両方から管理できます。

- **Manus経由**: ブラウザから直接編集、チェックポイント作成時に自動プッシュ
- **GitHub経由**: ローカル環境やGitHub Web UIで編集、プッシュ時に自動同期

詳細は [BLOG_MANAGEMENT.md](./BLOG_MANAGEMENT.md) を参照してください。

## 📦 デプロイ

このプロジェクトは、以下のプラットフォームに簡単にデプロイできます：

- **Vercel** (推奨)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**

### Vercelへのデプロイ

1. [Vercel](https://vercel.com/) にログイン
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. 自動的にビルド設定が検出されます
5. 「Deploy」をクリック

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 👤 作者

**Shooon**

- GitHub: [@shooooooon](https://github.com/shooooooon)
- Blog: [Shooon Blog](https://shooon-blog.manus.space)

## 🤝 貢献

プルリクエストは歓迎します！バグ報告や機能提案は、Issuesからお願いします。

---

Built with ❤️ using Manus AI
