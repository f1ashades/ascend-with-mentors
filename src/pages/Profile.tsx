import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, User as UserIcon, Mail, Phone, Calendar, TrendingUp, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    name: "微信用户",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
    phone: "138****8888",
    email: "user@example.com",
    joinDate: "2024年1月",
  };

  const userInfoItems = [
    {
      icon: UserIcon,
      label: "用户名",
      value: user.name,
    },
    {
      icon: Phone,
      label: "手机号",
      value: user.phone,
    },
    {
      icon: Mail,
      label: "邮箱",
      value: user.email,
    },
    {
      icon: Calendar,
      label: "注册时间",
      value: user.joinDate,
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

        {/* My Information Module */}
        <Card className="p-5 shadow-card">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-primary" />
            我的信息
          </h3>
          <div className="space-y-0 divide-y divide-border">
            {userInfoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-base font-medium truncate">{item.value}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-lg">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-around h-16">
            <button
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => navigate("/home")}
            >
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs">广场</span>
            </button>
            <button
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => navigate("/conversations")}
            >
              <User className="w-5 h-5" />
              <span className="text-xs">我的导师</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-primary">
              <User className="w-5 h-5" />
              <span className="text-xs font-medium">我的</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Profile;
