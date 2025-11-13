import { Mail, Github, Twitter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  const skills = [
    "React / TypeScript",
    "Node.js / Express",
    "Tailwind CSS",
    "Git / GitHub",
    "Docker",
    "PostgreSQL",
  ];

  const interests = [
    "Web開発",
    "UI/UXデザイン",
    "パフォーマンス最適化",
    "技術ブログ執筆",
    "オープンソース",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            {/* Profile Section */}
            <section className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                    S
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold tracking-tight mb-4">Shooon</h1>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    フロントエンドエンジニア / ブロガー
                  </p>
                  <p className="text-base leading-relaxed mb-6">
                    はじめまして、Shooonです。Web開発を中心に、日々の学びや技術的な発見をこのブログで共有しています。
                    特にReactやTypeScriptを使ったモダンなフロントエンド開発に興味があり、ユーザー体験を向上させることに情熱を注いでいます。
                  </p>
                  <p className="text-base leading-relaxed">
                    このブログでは、実際の開発で得た知見や、読んだ本の感想、日々の気づきなどを記録しています。
                    同じような課題に直面している方の助けになれば幸いです。
                  </p>
                </div>
              </div>
            </section>

            {/* Skills & Interests */}
            <section className="grid md:grid-cols-2 gap-6 mb-16">
              <Card>
                <CardHeader>
                  <CardTitle>スキル</CardTitle>
                  <CardDescription>
                    主に使用している技術スタック
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>興味のあること</CardTitle>
                  <CardDescription>
                    関心を持っている分野
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Section */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle>お問い合わせ</CardTitle>
                  <CardDescription>
                    ご質問やフィードバックがあれば、お気軽にご連絡ください
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" className="gap-2" asChild>
                      <a href="mailto:contact@example.com">
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </Button>
                    <Button variant="outline" className="gap-2" asChild>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" className="gap-2" asChild>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
