import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Users, BookOpen, Crown, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    name: "微信用户",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
  };

  const unlockedMentors = [
    {
      id: 1,
      name: "张明",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
      title: "字节跳动 · 高级产品经理",
    },
  ];

  const menuItems = [
    {
      icon: Users,
      label: "我解锁的导师",
      count: unlockedMentors.length,
      action: () => {},
    },
    {
      icon: BookOpen,
      label: "阅读历史",
      action: () => {},
    },
    {
      icon: Settings,
      label: "设置",
      action: () => {},
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-brand text-primary-foreground">
        <div className="container max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate("/home")}
            className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium">个人中心</span>
        </div>
      </header>

      <div className="container max-w-2xl mx-auto px-4 -mt-8 space-y-4">
        {/* User Info Card */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-4 border-background shadow-md">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-xl">{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-1">{user.name}</h2>
              <p className="text-sm text-muted-foreground">普通会员</p>
            </div>
          </div>
        </Card>

        {/* VIP Banner */}
        <Card className="p-5 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 shadow-card">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Crown className="w-5 h-5 text-accent" />
                <h3 className="font-semibold">升级VIP会员</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                解锁全部导师，享受无限制成长指导
              </p>
            </div>
            <Badge variant="secondary" className="text-xs">
              敬请期待
            </Badge>
          </div>
        </Card>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Card
              key={item.label}
              className="p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={item.action}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="flex-1 font-medium">{item.label}</span>
                {item.count !== undefined && (
                  <Badge variant="secondary" className="text-xs">
                    {item.count}
                  </Badge>
                )}
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>

        {/* Unlocked Mentors Preview */}
        {unlockedMentors.length > 0 && (
          <Card className="p-5 shadow-card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              已解锁的导师
            </h3>
            <div className="space-y-3">
              {unlockedMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                  onClick={() => navigate(`/chat/${mentor.id}`)}
                >
                  <Avatar className="w-12 h-12 border-2 border-background">
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{mentor.name}</h4>
                    <p className="text-xs text-muted-foreground truncate">{mentor.title}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-around h-16">
            <button
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => navigate("/home")}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="text-xs">广场</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-xs font-medium">我的</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Profile;
