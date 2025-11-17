# Shooon Blog

初心者でも簡単に運用・管理できる、モダンでシンプルな個人ブログサイトです。

## ✨ 特徴

- **初心者に優しい**: Markdownファイルで記事を管理（プログラミング知識不要）
- **シンプルな構造**: わかりやすいフォルダ構成
- **モダンな技術スタック**: Vite + React 19 + TypeScript
- **ミニマルデザイン**: Tailwind CSS 4による洗練されたUI
- **高速**: 効率的な読み込みとレンダリング
- **レスポンシブ**: モバイル・タブレット・デスクトップに完全対応

## 📖 初心者向けガイド

**プログラミング初心者の方は、まず [BEGINNER_GUIDE.md](./BEGINNER_GUIDE.md) をお読みください！**

記事の追加方法、画像の挿入方法、ブログの起動方法など、わかりやすく解説しています。

## 📁 プロジェクト構成

```
shooon_blog/
├── content/
│   └── posts/              # 📝 記事（Markdownファイル）
│       ├── welcome-to-my-blog.md
│       ├── react-hooks-best-practices.md
│       └── ...
├── client/
│   ├── src/
│   │   ├── pages/          # ページコンポーネント
│   │   ├── components/     # 再利用可能なコンポーネント
│   │   └── lib/            # ユーティリティ関数
│   └── public/
│       └── images/         # 🖼️ 画像ファイル
├── server/
│   ├── index.ts            # サーバーのメインファイル
│   └── posts.ts            # 記事読み込み機能
├── BEGINNER_GUIDE.md       # 🌟 初心者向けガイド
└── README.md
```

## 🛠️ 技術スタック

- **フレームワーク**: [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS 4](https://tailwindcss.com/)
- **ルーティング**: [Wouter](https://github.com/molefrog/wouter)
- **Markdownレンダリング**: [Streamdown](https://github.com/remorses/streamdown)
- **記事管理**: Markdown + gray-matter

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
pnpm start
```

## ✍️ 記事の追加方法（クイックスタート）

1. `content/posts/` フォルダに新しい `.md` ファイルを作成
2. ファイルの最初にメタデータを記述
3. その後に記事本文を書く

**例:**

```markdown
---
title: "新しい記事のタイトル"
date: "2025-03-15"
excerpt: "記事の簡単な説明"
tags: ["タグ1", "タグ2"]
readTime: "5分"
---

# 記事のタイトル

ここに記事の内容を書きます。

## 見出し

段落の文章...
```

詳細は [BEGINNER_GUIDE.md](./BEGINNER_GUIDE.md) を参照してください。

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

詳細は [BEGINNER_GUIDE.md](./BEGINNER_GUIDE.md) の「デプロイ方法」セクションを参照してください。

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
