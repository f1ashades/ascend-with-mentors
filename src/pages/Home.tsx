import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, TrendingUp, MessageCircle, User, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const majors = [
  { value: "all", label: "全部专业" },
  { value: "computer", label: "计算机" },
  { value: "finance", label: "金融" },
  { value: "civil", label: "土木" },
  { value: "medicine", label: "医学" },
  { value: "law", label: "法律" },
  { value: "business", label: "商科" },
  { value: "education", label: "教育" },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMajor, setSelectedMajor] = useState("all");

  const handleMentorClick = (mentorId: number) => {
    navigate(`/mentor/${mentorId}`);
  };

  const handleArticleClick = (articleId: number) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-bold">职场广场</h1>
          </div>
        </div>
      </header>

      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Major Selector & Search */}
        <div className="flex items-center gap-2">
          {/* Major Selector */}
          <Select value={selectedMajor} onValueChange={setSelectedMajor}>
            <SelectTrigger className="w-auto h-11 border-0 bg-secondary/50 font-medium px-3 gap-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {majors.map((major) => (
                <SelectItem key={major.value} value={major.value}>
                  {major.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="搜索导师姓名、行业、职位..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-secondary/50 border-0 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Article Feed */}
        <div className="space-y-4">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover:shadow-float transition-shadow duration-300 cursor-pointer"
            >
              {/* Mentor Info - Clickable */}
              <div
                className="p-4 border-b bg-secondary/20 hover:bg-secondary/40 transition-colors"
                onClick={() => handleMentorClick(article.mentor.id)}
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-background">
                    <AvatarImage src={article.mentor.avatar} />
                    <AvatarFallback>{article.mentor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{article.mentor.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{article.mentor.title}</p>
                  </div>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {article.mentor.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Article Content - Clickable */}
              <div
                className="p-4 hover:bg-secondary/10 transition-colors"
                onClick={() => handleArticleClick(article.id)}
              >
                <h2 className="text-base font-semibold mb-2 line-clamp-2">{article.title}</h2>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{article.summary}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.readCount} 阅读</span>
                  <span className="text-primary">查看详情 →</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-4">
          <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
            加载更多...
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-around h-16">
            <button className="flex flex-col items-center gap-1 text-primary">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs font-medium">广场</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => navigate("/conversations")}
            >
              <User className="w-5 h-5" />
              <span className="text-xs">我的导师</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => navigate("/profile")}
            >
              <User className="w-5 h-5" />
              <span className="text-xs">我的</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
