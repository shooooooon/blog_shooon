---
title: "フロントエンドのテスト戦略"
date: "2025-03-01"
excerpt: "単体テスト、統合テスト、E2Eテストをどのように組み合わせるか、実践的なアプローチを紹介します。"
tags: ["テスト", "フロントエンド", "品質保証"]
readTime: "7分"
---

# フロントエンドのテスト戦略

適切なテスト戦略を立てることで、バグを早期に発見し、リファクタリングを安全に行えます。

## テストピラミッド

テストは以下の3層で構成されます。

1. **単体テスト（Unit Test）**: 最も多く書く
2. **統合テスト（Integration Test）**: 中程度の量
3. **E2Eテスト（End-to-End Test）**: 最小限

## 単体テストの例（Vitest）

```typescript
import { describe, it, expect } from 'vitest';
import { formatDate } from './utils';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2025-01-15');
    expect(formatDate(date)).toBe('2025年1月15日');
  });
});
```

## コンポーネントのテスト（React Testing Library）

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

it('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

## E2Eテスト（Playwright）

```typescript
import { test, expect } from '@playwright/test';

test('user can login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
```

## テストを書く際のポイント

- ユーザーの視点でテストを書く
- 実装の詳細ではなく、振る舞いをテストする
- テストが失敗した時に原因がわかりやすいようにする

適切なテストを書くことで、自信を持ってコードを変更できるようになります。
