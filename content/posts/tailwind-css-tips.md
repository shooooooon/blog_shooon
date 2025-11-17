---
title: "Tailwind CSSで効率的にスタイリングする方法"
date: "2025-01-25"
excerpt: "Tailwind CSSの便利な機能と、実務で使えるテクニックを紹介します。カスタムクラスの作り方やレスポンシブデザインのコツなど。"
tags: ["CSS", "Tailwind", "フロントエンド"]
readTime: "4分"
---

# Tailwind CSSで効率的にスタイリングする方法

Tailwind CSSはユーティリティファーストのCSSフレームワークで、HTMLから離れることなく素早くスタイリングできます。

## ユーティリティクラスの組み合わせ

```html
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <!-- コンテンツ -->
</div>
```

## レスポンシブデザイン

Tailwindではブレークポイントをプレフィックスとして使用します。

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- モバイルでは全幅、タブレットで半分、デスクトップで1/3 -->
</div>
```

## カスタムクラスの作成

繰り返し使うスタイルは、@layerディレクティブでカスタムクラスとして定義できます。

```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}
```

Tailwindを使うことで、CSSファイルを行き来することなく、コンポーネント単位で完結したスタイリングが可能になります。
