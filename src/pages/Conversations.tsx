import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Home, User } from "lucide-react";

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
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="px-4 py-4">
          <h1 className="text-xl font-semibold">对话</h1>
        </div>
      </header>

      {/* Conversations List */}
      <div className="divide-y divide-border">
        {mockConversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => navigate(`/chat/${conversation.mentorId}`)}
            className="px-4 py-4 hover:bg-accent/50 transition-colors cursor-pointer active:bg-accent"
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <Avatar className="h-12 w-12 flex-shrink-0">
                <AvatarImage src={conversation.mentorAvatar} alt={conversation.mentorName} />
                <AvatarFallback>{conversation.mentorName[0]}</AvatarFallback>
              </Avatar>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-medium text-foreground truncate">
                    {conversation.mentorName}
                  </h3>
                  <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                    {conversation.lastMessageTime}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1 truncate">
                  {conversation.mentorTitle}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground truncate flex-1">
                    {conversation.lastMessage}
                  </p>
                  {conversation.unreadCount > 0 && (
                    <span className="ml-2 flex-shrink-0 bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no conversations) */}
      {mockConversations.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 px-4">
          <div className="w-16 h-16 rounded-full bg-accent/50 flex items-center justify-center mb-4">
            <MessageCircle className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-center">暂无对话记录</p>
          <p className="text-sm text-muted-foreground text-center mt-2">
            开始与导师对话，获取专业建议
          </p>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex items-center justify-around h-16">
          <button
            onClick={() => navigate("/home")}
            className="flex flex-col items-center justify-center flex-1 gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">广场</span>
          </button>
          <button
            className="flex flex-col items-center justify-center flex-1 gap-1 text-primary"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs font-medium">对话</span>
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="flex flex-col items-center justify-center flex-1 gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="text-xs">我的</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Conversations;
