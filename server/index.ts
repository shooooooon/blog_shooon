import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { getAllPosts, getPostBySlug, getPostsByTag, getAllTags } from "./posts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // API エンドポイント
  // すべての記事を取得
  app.get("/api/posts", (_req, res) => {
    try {
      const posts = getAllPosts();
      res.json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Failed to fetch posts' });
    }
  });

  // スラッグで記事を取得
  app.get("/api/posts/:slug", (req, res) => {
    try {
      const post = getPostBySlug(req.params.slug);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ error: 'Post not found' });
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      res.status(500).json({ error: 'Failed to fetch post' });
    }
  });

  // タグで記事をフィルタリング
  app.get("/api/tags/:tag", (req, res) => {
    try {
      const posts = getPostsByTag(req.params.tag);
      res.json(posts);
    } catch (error) {
      console.error('Error fetching posts by tag:', error);
      res.status(500).json({ error: 'Failed to fetch posts by tag' });
    }
  });

  // すべてのタグを取得
  app.get("/api/tags", (_req, res) => {
    try {
      const tags = getAllTags();
      res.json(tags);
    } catch (error) {
      console.error('Error fetching tags:', error);
      res.status(500).json({ error: 'Failed to fetch tags' });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
