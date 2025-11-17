---
title: "React Hooksのベストプラクティス"
date: "2025-01-20"
excerpt: "React Hooksを使う上で押さえておきたいポイントをまとめました。useEffectの依存配列の扱いや、カスタムフックの作り方など。"
tags: ["React", "JavaScript", "フロントエンド"]
readTime: "5分"
---

# React Hooksのベストプラクティス

React Hooksは関数コンポーネントで状態管理や副作用を扱うための強力な機能です。

## useStateの基本

```tsx
const [count, setCount] = useState(0);
```

状態の更新は非同期で行われるため、前の状態に基づいて更新する場合は関数形式を使います。

```tsx
setCount(prev => prev + 1);
```

## useEffectの依存配列

useEffectの第二引数には、エフェクトが依存する値を配列で指定します。依存配列を正しく設定しないと、無限ループやバグの原因になります。

## カスタムフックの作成

ロジックを再利用可能にするために、カスタムフックを作成することができます。

```tsx
function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
```

これらのベストプラクティスを押さえることで、より保守性の高いReactアプリケーションを作ることができます。
