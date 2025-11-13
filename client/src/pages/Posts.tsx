import { Link } from "wouter";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPostsSortedByDate, getAllTags } from "@/data/posts";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Posts() {
  const allPosts = getPostsSortedByDate();
  const allTags = getAllTags();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = selectedTag
    ? allPosts.filter(post => post.tags.includes(selectedTag))
    : allPosts;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">記事一覧</h1>
              <p className="text-lg text-muted-foreground">
                全{allPosts.length}件の記事があります
              </p>
            </div>

            {/* Tag Filter */}
            <div className="mb-8">
              <h2 className="text-sm font-medium mb-3">タグで絞り込み</h2>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTag === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                >
                  すべて
                </Button>
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/posts/${post.slug}`}>
                  <Card className="transition-all hover:shadow-lg hover:-translate-y-0.5">
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
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
                      <CardTitle className="text-2xl">{post.title}</CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
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
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">該当する記事が見つかりませんでした。</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
