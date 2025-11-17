---
title: "開発者のためのDocker入門"
date: "2025-02-25"
excerpt: "Dockerの基本概念と、開発環境でDockerを活用する方法を紹介します。"
tags: ["Docker", "DevOps", "インフラ"]
readTime: "5分"
---

# 開発者のためのDocker入門

Dockerは、アプリケーションをコンテナとして実行するためのプラットフォームです。

## Dockerの基本概念

- **イメージ**: アプリケーションの実行に必要なファイルシステムのスナップショット
- **コンテナ**: イメージから作成された実行環境
- **Dockerfile**: イメージを作成するための設定ファイル

## Dockerfileの例

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## docker-composeで複数のサービスを管理

```yaml
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
```

## Dockerのメリット

- 環境の一貫性が保たれる
- 依存関係の管理が容易
- 本番環境と同じ環境で開発できる

Dockerを使うことで、「自分の環境では動くのに」という問題を解決できます。
