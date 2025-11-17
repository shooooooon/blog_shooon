---
title: "読みやすいコードを書くための原則"
date: "2025-02-15"
excerpt: "保守性の高いコードを書くために意識すべきポイントをまとめました。命名規則や関数の分割など。"
tags: ["プログラミング", "ベストプラクティス"]
readTime: "5分"
---

# 読みやすいコードを書くための原則

良いコードとは、動くだけでなく、読みやすく保守しやすいコードです。

## 意味のある名前をつける

変数名や関数名は、その役割を明確に表すものにします。

```typescript
// ❌ 悪い例
const d = new Date();
const x = getUserData();

// ✅ 良い例
const currentDate = new Date();
const userData = getUserData();
```

## 関数は1つのことだけをする

関数は単一の責任を持つべきです。複数のことをしている場合は分割を検討します。

```typescript
// ❌ 悪い例
function processUserAndSendEmail(user: User) {
  // ユーザー情報を処理
  // メールを送信
}

// ✅ 良い例
function processUser(user: User) { /* ... */ }
function sendEmail(user: User) { /* ... */ }
```

## コメントよりもコードで説明する

コメントに頼るのではなく、コード自体が自己説明的であることを目指します。

## DRY原則（Don't Repeat Yourself）

同じコードを繰り返さず、共通化できる部分は関数やクラスに抽出します。

これらの原則を意識することで、チームメンバーが理解しやすいコードを書くことができます。
