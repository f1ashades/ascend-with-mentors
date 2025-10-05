import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock mentor data
  const mentor = {
    id: Number(id),
    name: "张明",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
    title: "字节跳动 · 高级产品经理",
  };

  const suggestedQuestions = [
    "如何从技术转型做产品？",
    "产品经理需要哪些核心能力？",
    "如何准备产品面试？",
  ];

  useEffect(() => {
    // Initial welcome message
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: "1",
            role: "assistant",
            content: `你好！我是${mentor.name}，很高兴能和你交流。我在互联网产品领域深耕多年，可以和你分享产品管理、职业发展等方面的经验。有什么想聊的吗？`,
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "这是一个很好的问题。基于我的经验，我建议你...",
        "从我的职业经历来看，关键在于...",
        "我理解你的困惑。当年我也遇到过类似的情况...",
      ];

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="container max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <Avatar className="w-10 h-10 border-2 border-background">
              <AvatarImage src={mentor.avatar} />
              <AvatarFallback>{mentor.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h1 className="font-semibold text-sm truncate">{mentor.name}</h1>
              <p className="text-xs text-muted-foreground truncate">{mentor.title}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container max-w-2xl mx-auto px-4 py-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {message.role === "assistant" && (
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <AvatarImage src={mentor.avatar} />
                  <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`flex-1 max-w-[80%] ${
                  message.role === "user" ? "flex justify-end" : ""
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-1">
                  {message.timestamp.toLocaleTimeString("zh-CN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-3">
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarImage src={mentor.avatar} />
                <AvatarFallback>{mentor.name[0]}</AvatarFallback>
              </Avatar>
              <div className="px-4 py-3 rounded-2xl bg-secondary">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-glow" />
                  <div
                    className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-glow"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse-glow"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Suggested questions (only show at start) */}
          {messages.length === 1 && !isTyping && (
            <div className="space-y-2 pt-2">
              <p className="text-xs text-muted-foreground px-1">你可以问我：</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <Badge
                    key={question}
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary transition-colors text-xs px-3 py-1.5"
                    onClick={() => handleSend(question)}
                  >
                    {question}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-card border-t shadow-lg">
        <div className="container max-w-2xl mx-auto px-4 py-4">
          <div className="flex gap-3">
            <Input
              placeholder="输入你的问题..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 h-11 bg-secondary/50 border-0 focus-visible:ring-primary"
            />
            <Button
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isTyping}
              className="h-11 w-11 p-0 gradient-accent hover:opacity-90 transition-opacity"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
