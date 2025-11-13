import { Link, useLocation } from "wouter";
import { APP_TITLE } from "@/const";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "ホーム" },
    { path: "/posts", label: "記事一覧" },
    { path: "/about", label: "自己紹介" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">{APP_TITLE}</span>
        </Link>
        
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
