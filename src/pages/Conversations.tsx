import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, Home, User, FileText } from "lucide-react";

// 模拟对话数据
const mockConversations = [
  {
    id: "1",
    mentorId: "1",
    mentorName: "张伟",
    mentorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mentor1",
    mentorTitle: "腾讯高级产品经理",
    lastMessage: "关于产品规划，我建议你可以先从用户调研开始...",
    lastMessageTime: "2分钟前",
    unreadCount: 2,
  },
  {
    id: "2",
    mentorId: "2",
    mentorName: "李娜",
    mentorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mentor2",
    mentorTitle: "字节跳动技术总监",
    lastMessage: "技术架构的选择要考虑团队的实际情况",
    lastMessageTime: "1小时前",
    unreadCount: 0,
  },
  {
    id: "3",
    mentorId: "3",
    mentorName: "王强",
    mentorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mentor3",
    mentorTitle: "阿里巴巴运营专家",
    lastMessage: "用户增长的核心在于找到产品的核心价值",
    lastMessageTime: "昨天",
    unreadCount: 1,
  },
];

const Conversations = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/98 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 border-b border-border/50">
        <div className="container max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-sm">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">我的导师</h1>
          </div>
        </div>
      </header>

      {/* Conversations List */}
      <div className="container max-w-2xl mx-auto">
        <div className="divide-y divide-border/50">
          {mockConversations.map((conversation) => (
          <div
            key={conversation.id}
            className="px-4 py-5 hover:bg-accent/30 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <Avatar className="h-14 w-14 flex-shrink-0 ring-2 ring-background shadow-sm">
                <AvatarImage src={conversation.mentorAvatar} alt={conversation.mentorName} />
                <AvatarFallback className="text-base font-medium">{conversation.mentorName[0]}</AvatarFallback>
              </Avatar>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between mb-1.5">
                  <h3 className="font-semibold text-foreground text-base">
                    {conversation.mentorName}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground/80 mb-3 leading-relaxed">
                  {conversation.mentorTitle}
                </p>
                
                {/* Buttons */}
                <div className="flex gap-2.5">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-9 text-xs font-medium border-border/60 hover:bg-secondary hover:border-primary/20 hover:text-primary transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/report/${conversation.mentorId}`);
                    }}
                  >
                    <FileText className="w-3.5 h-3.5 mr-1.5" />
                    查看报告
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 h-9 text-xs font-medium shadow-sm hover:shadow transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/chat/${conversation.mentorId}`);
                    }}
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                    和他聊聊
                  </Button>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* Empty State (if no conversations) */}
      {mockConversations.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 px-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 shadow-sm">
            <User className="w-10 h-10 text-primary/60" />
          </div>
          <p className="text-base font-medium text-foreground mb-2">暂无导师</p>
          <p className="text-sm text-muted-foreground/70 text-center max-w-xs">
            去广场发现优秀导师，开启你的职业成长之旅
          </p>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border/50 shadow-lg">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-around h-16">
          <button
            onClick={() => navigate("/home")}
            className="flex flex-col items-center justify-center flex-1 gap-1.5 text-muted-foreground hover:text-foreground transition-all"
          >
            <Home className="w-5 h-5" />
            <span className="text-[11px] font-medium">广场</span>
          </button>
          <button
            className="flex flex-col items-center justify-center flex-1 gap-1.5 text-primary"
          >
            <div className="relative">
              <User className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-semibold">我的导师</span>
          </button>
            <button
              className="flex flex-col items-center justify-center flex-1 gap-1.5 text-muted-foreground hover:text-foreground transition-all"
              onClick={() => navigate("/profile")}
            >
              <User className="w-5 h-5" />
              <span className="text-[11px] font-medium">我的</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Conversations;
