import { Link } from "wouter";
import { ArrowRight, BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostsSortedByDate } from "@/data/posts";

export default function Home() {
  const recentPosts = getPostsSortedByDate().slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Welcome to<br />Shooon Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              技術、学び、日々の気づきを綴るブログ。<br />
              プログラミングや開発に関する知見を共有しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/posts">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-5 w-5" />
                  記事を読む
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="gap-2">
                  <User className="h-5 w-5" />
                  自己紹介
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="container py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold tracking-tight">最新の記事</h2>
              <Link href="/posts">
                <Button variant="ghost" className="gap-2">
                  すべて見る
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link key={post.id} href={`/posts/${post.slug}`}>
                  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
