---
title: "TypeScriptのジェネリクスを理解する"
date: "2025-02-01"
excerpt: "TypeScriptのジェネリクスは最初は難しく感じますが、理解すると型安全性が大幅に向上します。基本から実践的な使い方まで解説します。"
tags: ["TypeScript", "プログラミング"]
readTime: "6分"
---

# TypeScriptのジェネリクスを理解する

ジェネリクスは、型を引数として受け取ることで、再利用可能で型安全なコードを書くための機能です。

## 基本的な使い方

```typescript
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello"); // string型
const num = identity<number>(42); // number型
```

## 配列とジェネリクス

```typescript
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const first = getFirstElement([1, 2, 3]); // number | undefined
```

## インターフェースとジェネリクス

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserResponse = ApiResponse<{ id: number; name: string }>;
```

## 制約付きジェネリクス

```typescript
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}
```

ジェネリクスを使いこなすことで、より柔軟で型安全なコードを書くことができます。
