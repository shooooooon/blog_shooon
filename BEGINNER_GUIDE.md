# 初心者向けガイド - Shooon Blog

このガイドでは、プログラミング初心者でも簡単にブログを運用・管理できるように、基本的な操作方法を説明します。

## 📚 目次

1. [プロジェクト構造](#プロジェクト構造)
2. [記事の追加方法](#記事の追加方法)
3. [画像の追加方法](#画像の追加方法)
4. [開発環境のセットアップ](#開発環境のセットアップ)
5. [ブログの起動方法](#ブログの起動方法)
6. [デプロイ方法](#デプロイ方法)
7. [トラブルシューティング](#トラブルシューティング)

---

## プロジェクト構造

```
blog_shooon/
├── content/
│   └── posts/                # ← ここに記事（.mdファイル）を追加します
│       ├── welcome-to-my-blog.md
│       ├── react-hooks-best-practices.md
│       └── ...
├── client/                   # フロントエンド（ブラウザに表示される部分）
│   ├── src/
│   │   ├── pages/           # ページコンポーネント
│   │   ├── components/      # 再利用可能なコンポーネント
│   │   └── lib/            # ユーティリティ関数
│   └── public/             # 静的ファイル（画像など）
├── server/                   # バックエンド（サーバー）
│   ├── index.ts            # サーバーのメインファイル
│   └── posts.ts            # 記事読み込み機能
├── package.json             # プロジェクトの設定と依存関係
└── README.md               # プロジェクトの説明
```

---

## 記事の追加方法

### ステップ1: 新しいMarkdownファイルを作成

`content/posts/` フォルダに新しい `.md` ファイルを作成します。

**ファイル名のルール:**
- 英小文字、数字、ハイフン（-）のみを使用
- スペースは使わない
- 例: `my-new-article.md`

### ステップ2: 記事の内容を書く

ファイルの最初に**フロントマター**（メタデータ）を追加し、その後に記事本文を書きます。

```markdown
---
title: "記事のタイトル"
date: "2025-03-15"
excerpt: "記事の簡単な説明（要約）"
tags: ["タグ1", "タグ2", "タグ3"]
readTime: "5分"
---

# 記事のタイトル

ここから記事の本文を書きます。

## 見出し2

段落の文章...

### 見出し3

- リスト項目1
- リスト項目2
- リスト項目3

## コードの例

\`\`\`typescript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

## 画像の挿入

![説明テキスト](/path/to/image.jpg)
```

### フロントマターの説明

- `title`: 記事のタイトル（必須）
- `date`: 公開日（YYYY-MM-DD形式、必須）
- `excerpt`: 記事の要約（記事一覧で表示されます）
- `tags`: タグのリスト（配列形式で指定）
- `readTime`: 読了時間の目安

### Markdown の基本的な書き方

#### 見出し
```markdown
# 見出し1（最大）
## 見出し2
### 見出し3
```

#### 太字・斜体
```markdown
**太字**
*斜体*
***太字＋斜体***
```

#### リンク
```markdown
[リンクのテキスト](https://example.com)
```

#### 画像
```markdown
![画像の説明](/images/photo.jpg)
```

#### コードブロック
````markdown
```javascript
const message = "Hello, World!";
console.log(message);
```
````

#### リスト
```markdown
- 項目1
- 項目2
  - サブ項目2-1
  - サブ項目2-2
```

#### 番号付きリスト
```markdown
1. 最初のステップ
2. 次のステップ
3. 最後のステップ
```

---

## 画像の追加方法

### ステップ1: 画像ファイルを配置

画像ファイルを `client/public/images/` フォルダに保存します。

```
client/public/images/
├── my-photo.jpg
├── diagram.png
└── logo.svg
```

### ステップ2: 記事から画像を参照

Markdownファイル内で、以下のように画像を挿入します：

```markdown
![画像の説明](/images/my-photo.jpg)
```

**ポイント:**
- パスは `/images/` から始まります
- ファイル名は正確に（大文字小文字を区別します）

---

## 開発環境のセットアップ

### 必要なもの

- **Node.js** (バージョン20以上) - [ダウンロード](https://nodejs.org/)
- **pnpm** - パッケージマネージャー

### pnpm のインストール

```bash
npm install -g pnpm
```

### プロジェクトのセットアップ

1. **プロジェクトフォルダに移動:**
   ```bash
   cd blog_shooon
   ```

2. **依存関係をインストール:**
   ```bash
   pnpm install
   ```

---

## ブログの起動方法

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで http://localhost:3000 を開いてブログを確認できます。

**自動リロード機能:**
- ファイルを変更すると、ブラウザが自動的に更新されます
- 記事を追加・編集したら、ブラウザをリロードしてください

### 本番用ビルド

```bash
pnpm build
```

### ビルドしたファイルをプレビュー

```bash
pnpm start
```

---

## デプロイ方法

### Vercel（推奨・無料）

1. [Vercel](https://vercel.com/) にアクセスし、GitHubアカウントでサインアップ
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. 「Deploy」をクリック

Vercelが自動的にビルド設定を検出し、デプロイしてくれます。

### Netlify

1. [Netlify](https://www.netlify.com/) にアクセスし、GitHubアカウントでサインアップ
2. 「Add new site」→「Import an existing project」をクリック
3. GitHubリポジトリを選択
4. ビルド設定:
   - Build command: `pnpm build`
   - Publish directory: `dist/public`
5. 「Deploy site」をクリック

---

## トラブルシューティング

### よくある問題と解決方法

#### 1. `pnpm: command not found`

**原因:** pnpmがインストールされていない

**解決方法:**
```bash
npm install -g pnpm
```

#### 2. ブログが表示されない（記事が表示されない）

**原因:**
- Markdownファイルのフロントマターが正しくない
- サーバーが起動していない

**解決方法:**
1. Markdownファイルのフロントマターを確認（`---`で囲まれているか）
2. サーバーを再起動: `Ctrl+C` で停止 → `pnpm dev` で再起動

#### 3. 画像が表示されない

**原因:**
- 画像のパスが間違っている
- 画像ファイルが `client/public/images/` に配置されていない

**解決方法:**
1. 画像ファイルのパスを確認: `/images/ファイル名.jpg`
2. ファイル名の大文字・小文字を確認
3. ブラウザのデベロッパーツール（F12）でエラーを確認

#### 4. ビルドエラーが発生する

**原因:**
- TypeScriptの型エラー
- 依存関係の問題

**解決方法:**
```bash
# 依存関係を再インストール
rm -rf node_modules
pnpm install

# ビルドを再実行
pnpm build
```

#### 5. ポート3000が使用中

**原因:** 他のアプリケーションがポート3000を使用している

**解決方法:**
- Viteが自動的に別のポートを選択します（例: 3001）
- または、他のアプリケーションを停止してください

---

## 便利なTips

### 記事の下書き機能

記事を公開せずに下書きとして保存したい場合:
1. ファイル名の先頭に `draft-` をつける（例: `draft-my-article.md`）
2. または、`content/drafts/` フォルダを作成してそこに保存

### 記事の日付を未来に設定

`date` を未来の日付に設定すれば、予約投稿のようになります。
ただし、実際に公開されるのはその日付になってからではなく、すぐに公開されます。

### Markdown エディタの推奨

- **VS Code** + Markdown Preview Enhanced 拡張機能
- **Typora** - リアルタイムプレビュー機能付き

---

## さらに詳しく知りたい場合

- [Markdown 記法チートシート](https://www.markdownguide.org/cheat-sheet/)
- [React 公式ドキュメント](https://react.dev/)
- [Tailwind CSS 公式ドキュメント](https://tailwindcss.com/)

---

## サポート

質問や問題がある場合は、GitHubのIssuesで報告してください:
https://github.com/shooooooon/blog_shooon/issues

Happy Blogging! 🎉
