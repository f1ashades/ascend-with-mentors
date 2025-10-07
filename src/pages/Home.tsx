import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, TrendingUp, User, Eye, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Categories data
const categories = [
  { id: "all", name: "全部", icon: "✨" },
  { id: "tech", name: "计算机", icon: "💻" },
  { id: "finance", name: "金融", icon: "💰" },
  { id: "engineering", name: "土木工程", icon: "🏗️" },
  { id: "marketing", name: "市场营销", icon: "📊" },
  { id: "design", name: "设计", icon: "🎨" },
  { id: "medical", name: "医疗健康", icon: "⚕️" },
  { id: "education", name: "教育", icon: "📚" },
  { id: "law", name: "法律", icon: "⚖️" },
];

// Mock data
const articles = [
  {
    id: 1,
    title: "从0到1：我在字节跳动做产品的3年经验总结",
    summary: "分享我从应届生到高级产品经理的成长路径，以及在大厂做产品的核心方法论...",
    mentor: {
      id: 1,
      name: "张明",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
      title: "字节跳动 · 高级产品经理",
      tags: ["产品", "互联网"],
    },
    readCount: "2.3k",
  },
  {
    id: 2,
    title: "技术转管理的那些坑，我都踩过了",
    summary: "作为一名从技术转型到管理的过来人，我想和你聊聊这条路上的挑战与机遇...",
    mentor: {
      id: 2,
      name: "李华",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Li",
      title: "阿里巴巴 · 技术总监",
      tags: ["技术管理", "架构"],
    },
    readCount: "1.8k",
  },
  {
    id: 3,
    title: "职场新人必读：如何快速建立个人影响力",
    summary: "刚进入职场的你，是否也在困惑如何让自己被看见？这篇文章告诉你答案...",
    mentor: {
      id: 3,
      name: "王芳",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wang",
      title: "腾讯 · 人力资源总监",
      tags: ["职业发展", "HR"],
    },
    readCount: "3.1k",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleMentorClick = (mentorId: number) => {
    navigate(`/mentor/${mentorId}`);
  };

  const handleArticleClick = (articleId: number) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 border-b shadow-sm">
        <div className="container max-w-2xl mx-auto px-4 py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  职场广场
                </h1>
                <p className="text-[10px] text-muted-foreground">发现优秀导师</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container max-w-2xl mx-auto px-4 space-y-5">
        {/* Search Bar */}
        <div className="pt-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground" />
            <Input
              placeholder="搜索导师、行业、职位..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 h-11 bg-card border-border/50 rounded-xl shadow-sm hover:shadow-md transition-shadow focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="relative -mx-4 px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex-shrink-0 h-9 px-4 rounded-full snap-start transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-brand text-primary-foreground shadow-md hover:shadow-lg scale-105"
                    : "bg-card hover:bg-secondary border-border/50 hover:border-primary/30"
                }`}
              >
                <span className="mr-1.5 text-sm">{category.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Article Feed */}
        <div className="space-y-4 pb-6">
          {articles.map((article, index) => (
            <Card
              key={article.id}
              className="overflow-hidden border-border/50 shadow-card hover:shadow-float hover:border-primary/20 transition-all duration-300 cursor-pointer animate-fade-in rounded-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Mentor Info - Clickable */}
              <div
                className="p-4 bg-gradient-to-br from-secondary/30 to-secondary/10 hover:from-secondary/50 hover:to-secondary/20 transition-all duration-300 border-b border-border/30"
                onClick={() => handleMentorClick(article.mentor.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-13 h-13 ring-2 ring-background shadow-md">
                      <AvatarImage src={article.mentor.avatar} />
                      <AvatarFallback className="bg-gradient-brand text-primary-foreground">
                        {article.mentor.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-success rounded-full ring-2 ring-background" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[15px] truncate mb-0.5">{article.mentor.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{article.mentor.title}</p>
                  </div>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {article.mentor.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-[11px] px-2 py-0.5 rounded-md bg-background/60 hover:bg-background/80 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Article Content - Clickable */}
              <div
                className="p-4 hover:bg-gradient-to-br hover:from-secondary/5 hover:to-transparent transition-all duration-300"
                onClick={() => handleArticleClick(article.id)}
              >
                <h2 className="text-[15px] font-bold mb-2.5 line-clamp-2 leading-snug text-foreground">
                  {article.title}
                </h2>
                <p className="text-[13px] text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{article.readCount} 阅读</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                    <span>查看详情</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-6">
          <Button 
            variant="outline" 
            className="rounded-full px-8 hover:bg-secondary hover:scale-105 transition-all duration-300 shadow-sm"
          >
            <span className="text-sm">加载更多</span>
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-2xl z-10">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-around h-16">
            <button className="flex flex-col items-center gap-1 text-primary relative group">
              <div className="relative">
                <TrendingUp className="w-5 h-5 transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              </div>
              <span className="text-[11px] font-semibold">广场</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all group"
              onClick={() => navigate("/conversations")}
            >
              <User className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-[11px]">我的导师</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all group"
              onClick={() => navigate("/profile")}
            >
              <User className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-[11px]">我的</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
