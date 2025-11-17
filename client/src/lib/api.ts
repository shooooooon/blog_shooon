export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

const API_BASE_URL = '/api';

/**
 * すべての記事を取得
 */
export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

/**
 * スラッグで記事を取得
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch post');
  }
  return response.json();
}

/**
 * タグで記事をフィルタリング
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/tags/${tag}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts by tag');
  }
  return response.json();
}

/**
 * すべてのタグを取得
 */
export async function getAllTags(): Promise<string[]> {
  const response = await fetch(`${API_BASE_URL}/tags`);
  if (!response.ok) {
    throw new Error('Failed to fetch tags');
  }
  return response.json();
}

/**
 * 記事を日付順（新しい順）で取得
 */
export async function getPostsSortedByDate(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
