export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "welcome-to-my-blog",
    title: "ブログを始めました",
    excerpt: "はじめまして。このブログでは、日々の学びや技術的な発見、思考の記録を綴っていきます。",
    content: `# ブログを始めました

はじめまして。このブログでは、日々の学びや技術的な発見、思考の記録を綴っていきます。

## なぜブログを始めたのか

情報をアウトプットすることで、自分の理解を深めたいと思ったからです。また、同じような課題に直面している方の助けになれば幸いです。

## どんな内容を書くのか

- プログラミングに関する技術記事
- 読んだ本の感想
- 日々の気づきや学び
- 趣味や興味のあること

これから定期的に更新していく予定です。どうぞよろしくお願いします。`,
    date: "2025-01-15",
    readTime: "3分",
    tags: ["お知らせ", "雑記"]
  },
  {
    id: "2",
    slug: "react-hooks-best-practices",
    title: "React Hooksのベストプラクティス",
    excerpt: "React Hooksを使う上で押さえておきたいポイントをまとめました。useEffectの依存配列の扱いや、カスタムフックの作り方など。",
    content: `# React Hooksのベストプラクティス

React Hooksは関数コンポーネントで状態管理や副作用を扱うための強力な機能です。

## useStateの基本

\`\`\`tsx
const [count, setCount] = useState(0);
\`\`\`

状態の更新は非同期で行われるため、前の状態に基づいて更新する場合は関数形式を使います。

\`\`\`tsx
setCount(prev => prev + 1);
\`\`\`

## useEffectの依存配列

useEffectの第二引数には、エフェクトが依存する値を配列で指定します。依存配列を正しく設定しないと、無限ループやバグの原因になります。

## カスタムフックの作成

ロジックを再利用可能にするために、カスタムフックを作成することができます。

\`\`\`tsx
function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
\`\`\`

これらのベストプラクティスを押さえることで、より保守性の高いReactアプリケーションを作ることができます。`,
    date: "2025-01-20",
    readTime: "5分",
    tags: ["React", "JavaScript", "フロントエンド"]
  },
  {
    id: "3",
    slug: "tailwind-css-tips",
    title: "Tailwind CSSで効率的にスタイリングする方法",
    excerpt: "Tailwind CSSの便利な機能と、実務で使えるテクニックを紹介します。カスタムクラスの作り方やレスポンシブデザインのコツなど。",
    content: `# Tailwind CSSで効率的にスタイリングする方法

Tailwind CSSはユーティリティファーストのCSSフレームワークで、HTMLから離れることなく素早くスタイリングできます。

## ユーティリティクラスの組み合わせ

\`\`\`html
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <!-- コンテンツ -->
</div>
\`\`\`

## レスポンシブデザイン

Tailwindではブレークポイントをプレフィックスとして使用します。

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- モバイルでは全幅、タブレットで半分、デスクトップで1/3 -->
</div>
\`\`\`

## カスタムクラスの作成

繰り返し使うスタイルは、@layerディレクティブでカスタムクラスとして定義できます。

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
\`\`\`

Tailwindを使うことで、CSSファイルを行き来することなく、コンポーネント単位で完結したスタイリングが可能になります。`,
    date: "2025-01-25",
    readTime: "4分",
    tags: ["CSS", "Tailwind", "フロントエンド"]
  },
  {
    id: "4",
    slug: "typescript-generics-guide",
    title: "TypeScriptのジェネリクスを理解する",
    excerpt: "TypeScriptのジェネリクスは最初は難しく感じますが、理解すると型安全性が大幅に向上します。基本から実践的な使い方まで解説します。",
    content: `# TypeScriptのジェネリクスを理解する

ジェネリクスは、型を引数として受け取ることで、再利用可能で型安全なコードを書くための機能です。

## 基本的な使い方

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello"); // string型
const num = identity<number>(42); // number型
\`\`\`

## 配列とジェネリクス

\`\`\`typescript
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const first = getFirstElement([1, 2, 3]); // number | undefined
\`\`\`

## インターフェースとジェネリクス

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserResponse = ApiResponse<{ id: number; name: string }>;
\`\`\`

## 制約付きジェネリクス

\`\`\`typescript
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}
\`\`\`

ジェネリクスを使いこなすことで、より柔軟で型安全なコードを書くことができます。`,
    date: "2025-02-01",
    readTime: "6分",
    tags: ["TypeScript", "プログラミング"]
  },
  {
    id: "5",
    slug: "web-performance-optimization",
    title: "Webパフォーマンス最適化の基本",
    excerpt: "ユーザー体験を向上させるために、Webサイトのパフォーマンスを最適化する方法を紹介します。",
    content: `# Webパフォーマンス最適化の基本

Webサイトの読み込み速度は、ユーザー体験に直結する重要な要素です。

## 画像の最適化

- WebPやAVIF形式を使用する
- 適切なサイズにリサイズする
- 遅延読み込み（lazy loading）を実装する

\`\`\`html
<img src="image.webp" loading="lazy" alt="説明" />
\`\`\`

## コードの最適化

- 不要なJavaScriptを削除する
- コード分割（code splitting）を行う
- Tree shakingで未使用コードを除去する

## キャッシュの活用

適切なキャッシュヘッダーを設定することで、リピート訪問時の読み込みを高速化できます。

## Core Web Vitalsの改善

- LCP (Largest Contentful Paint): 2.5秒以内
- FID (First Input Delay): 100ミリ秒以内
- CLS (Cumulative Layout Shift): 0.1以下

これらの指標を意識することで、ユーザーにとって快適なWebサイトを作ることができます。`,
    date: "2025-02-05",
    readTime: "5分",
    tags: ["パフォーマンス", "Web開発"]
  },
  {
    id: "6",
    slug: "git-workflow-best-practices",
    title: "チーム開発で使えるGitワークフロー",
    excerpt: "複数人での開発をスムーズに進めるためのGitの使い方とブランチ戦略について解説します。",
    content: `# チーム開発で使えるGitワークフロー

チームでの開発では、適切なGitワークフローを採用することが重要です。

## Git Flowとは

Git Flowは、以下のブランチを使い分ける戦略です。

- **main**: 本番環境にデプロイされるコード
- **develop**: 開発の基準となるブランチ
- **feature**: 新機能開発用のブランチ
- **release**: リリース準備用のブランチ
- **hotfix**: 緊急修正用のブランチ

## コミットメッセージの書き方

わかりやすいコミットメッセージを書くことで、後から変更履歴を追いやすくなります。

\`\`\`
feat: ユーザー登録機能を追加
fix: ログインエラーを修正
docs: READMEを更新
refactor: コードを整理
\`\`\`

## プルリクエストのベストプラクティス

- 小さな単位で分割する
- 説明を丁寧に書く
- レビューしやすいコードを心がける

適切なワークフローを採用することで、チーム全体の生産性が向上します。`,
    date: "2025-02-10",
    readTime: "4分",
    tags: ["Git", "チーム開発", "ツール"]
  },
  {
    id: "7",
    slug: "clean-code-principles",
    title: "読みやすいコードを書くための原則",
    excerpt: "保守性の高いコードを書くために意識すべきポイントをまとめました。命名規則や関数の分割など。",
    content: `# 読みやすいコードを書くための原則

良いコードとは、動くだけでなく、読みやすく保守しやすいコードです。

## 意味のある名前をつける

変数名や関数名は、その役割を明確に表すものにします。

\`\`\`typescript
// ❌ 悪い例
const d = new Date();
const x = getUserData();

// ✅ 良い例
const currentDate = new Date();
const userData = getUserData();
\`\`\`

## 関数は1つのことだけをする

関数は単一の責任を持つべきです。複数のことをしている場合は分割を検討します。

\`\`\`typescript
// ❌ 悪い例
function processUserAndSendEmail(user: User) {
  // ユーザー情報を処理
  // メールを送信
}

// ✅ 良い例
function processUser(user: User) { /* ... */ }
function sendEmail(user: User) { /* ... */ }
\`\`\`

## コメントよりもコードで説明する

コメントに頼るのではなく、コード自体が自己説明的であることを目指します。

## DRY原則（Don't Repeat Yourself）

同じコードを繰り返さず、共通化できる部分は関数やクラスに抽出します。

これらの原則を意識することで、チームメンバーが理解しやすいコードを書くことができます。`,
    date: "2025-02-15",
    readTime: "5分",
    tags: ["プログラミング", "ベストプラクティス"]
  },
  {
    id: "8",
    slug: "api-design-rest-graphql",
    title: "RESTとGraphQL、どちらを選ぶべきか",
    excerpt: "APIの設計において、RESTとGraphQLのそれぞれの特徴と使い分けについて考察します。",
    content: `# RESTとGraphQL、どちらを選ぶべきか

APIの設計において、RESTとGraphQLはそれぞれ異なる特徴を持っています。

## RESTの特徴

- シンプルで理解しやすい
- HTTPメソッド（GET, POST, PUT, DELETE）を使用
- エンドポイントごとにリソースが定義される
- キャッシュが容易

\`\`\`
GET /api/users/123
POST /api/users
PUT /api/users/123
DELETE /api/users/123
\`\`\`

## GraphQLの特徴

- クライアントが必要なデータを指定できる
- 単一のエンドポイント
- Over-fetchingやUnder-fetchingを防げる
- 型システムによる安全性

\`\`\`graphql
query {
  user(id: "123") {
    name
    email
    posts {
      title
    }
  }
}
\`\`\`

## どちらを選ぶべきか

- **RESTが向いている場合**: シンプルなCRUD操作、キャッシュを重視する場合
- **GraphQLが向いている場合**: 複雑なデータ取得、モバイルアプリなど通信量を抑えたい場合

プロジェクトの要件に応じて、適切な技術を選択することが重要です。`,
    date: "2025-02-20",
    readTime: "6分",
    tags: ["API", "REST", "GraphQL", "バックエンド"]
  },
  {
    id: "9",
    slug: "docker-basics-for-developers",
    title: "開発者のためのDocker入門",
    excerpt: "Dockerの基本概念と、開発環境でDockerを活用する方法を紹介します。",
    content: `# 開発者のためのDocker入門

Dockerは、アプリケーションをコンテナとして実行するためのプラットフォームです。

## Dockerの基本概念

- **イメージ**: アプリケーションの実行に必要なファイルシステムのスナップショット
- **コンテナ**: イメージから作成された実行環境
- **Dockerfile**: イメージを作成するための設定ファイル

## Dockerfileの例

\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## docker-composeで複数のサービスを管理

\`\`\`yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: password
\`\`\`

## Dockerのメリット

- 環境の一貫性が保たれる
- 依存関係の管理が容易
- 本番環境と同じ環境で開発できる

Dockerを使うことで、「自分の環境では動くのに」という問題を解決できます。`,
    date: "2025-02-25",
    readTime: "5分",
    tags: ["Docker", "DevOps", "インフラ"]
  },
  {
    id: "10",
    slug: "testing-strategies-frontend",
    title: "フロントエンドのテスト戦略",
    excerpt: "単体テスト、統合テスト、E2Eテストをどのように組み合わせるか、実践的なアプローチを紹介します。",
    content: `# フロントエンドのテスト戦略

適切なテスト戦略を立てることで、バグを早期に発見し、リファクタリングを安全に行えます。

## テストピラミッド

テストは以下の3層で構成されます。

1. **単体テスト（Unit Test）**: 最も多く書く
2. **統合テスト（Integration Test）**: 中程度の量
3. **E2Eテスト（End-to-End Test）**: 最小限

## 単体テストの例（Vitest）

\`\`\`typescript
import { describe, it, expect } from 'vitest';
import { formatDate } from './utils';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2025-01-15');
    expect(formatDate(date)).toBe('2025年1月15日');
  });
});
\`\`\`

## コンポーネントのテスト（React Testing Library）

\`\`\`typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

it('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
\`\`\`

## E2Eテスト（Playwright）

\`\`\`typescript
import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
\`\`\`

## テストを書く際のポイント

- ユーザーの視点でテストを書く
- 実装の詳細ではなく、振る舞いをテストする
- テストが失敗した時に原因がわかりやすいようにする

適切なテストを書くことで、自信を持ってコードを変更できるようになります。`,
    date: "2025-03-01",
    readTime: "7分",
    tags: ["テスト", "フロントエンド", "品質保証"]
  }
];

// 記事をスラッグで取得
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

// 記事を日付順（新しい順）で取得
export function getPostsSortedByDate(): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// タグで記事をフィルタリング
export function getPostsByTag(tag: string): Post[] {
  return posts.filter(post => post.tags.includes(tag));
}

// すべてのタグを取得
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}
