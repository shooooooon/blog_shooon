import { useRoute, Link } from "wouter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostBySlug } from "@/data/posts";
import { Streamdown } from "streamdown";

export default function PostDetail() {
  const [, params] = useRoute("/posts/:slug");
  const post = params?.slug ? getPostBySlug(params.slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold mb-4">記事が見つかりません</h1>
            <p className="text-muted-foreground mb-8">
              お探しの記事は存在しないか、削除された可能性があります。
            </p>
            <Link href="/posts">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                記事一覧に戻る
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            {/* Back Button */}
            <Link href="/posts">
              <Button variant="ghost" size="sm" className="mb-8 gap-2">
                <ArrowLeft className="h-4 w-4" />
                記事一覧に戻る
              </Button>
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {post.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-pre:bg-muted prose-code:text-primary prose-code:before:content-none prose-code:after:content-none">
              <Streamdown>{post.content}</Streamdown>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
