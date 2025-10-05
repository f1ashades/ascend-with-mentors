import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import PaymentSheet from "@/components/PaymentSheet";

const MentorProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showPayment, setShowPayment] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Mock data
  const mentor = {
    id: Number(id),
    name: "张明",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
    title: "字节跳动 · 高级产品经理",
    bio: "8年互联网产品经验，主导过3款DAU超千万的产品从0到1。擅长用户增长、产品策略、团队管理。",
    tags: ["产品管理", "用户增长", "B端产品", "团队管理"],
    milestones: [
      { year: "2023", event: "晋升高级产品经理，负责核心产品线" },
      { year: "2021", event: "主导某产品从0到1000万用户" },
      { year: "2019", event: "加入字节跳动产品团队" },
      { year: "2016", event: "毕业于清华大学，获计算机硕士学位" },
    ],
  };

  const handleChatClick = () => {
    if (isUnlocked) {
      navigate(`/chat/${mentor.id}`);
    } else {
      setShowPayment(true);
    }
  };

  const handlePaymentSuccess = () => {
    setIsUnlocked(true);
    setShowPayment(false);
    navigate(`/chat/${mentor.id}`);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-medium">导师主页</span>
        </div>
      </header>

      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <Card className="p-6 shadow-card">
          <div className="flex gap-4 mb-4">
            <Avatar className="w-20 h-20 border-4 border-background shadow-md">
              <AvatarImage src={mentor.avatar} />
              <AvatarFallback className="text-2xl">{mentor.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-xl font-bold mb-1">{mentor.name}</h1>
              <p className="text-sm text-muted-foreground mb-3">{mentor.title}</p>
              <div className="flex flex-wrap gap-2">
                {mentor.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{mentor.bio}</p>
        </Card>

        {/* Milestones */}
        <Card className="p-6 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">职业里程碑</h2>
          </div>
          <div className="space-y-4">
            {mentor.milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{milestone.year}</span>
                  </div>
                  {index < mentor.milestones.length - 1 && (
                    <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-border -translate-x-1/2 h-4" />
                  )}
                </div>
                <div className="flex-1 pt-3">
                  <p className="text-sm leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Source Info */}
        <Card className="p-6 shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                智慧来源
                <CheckCircle2 className="w-4 h-4 text-success" />
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                本数字分身基于 <span className="font-semibold text-foreground">{mentor.name}</span>{" "}
                的真实经历、文章著作、行业见解等训练而成，能够以TA的视角为你提供专业建议和职业指导。
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 border-t shadow-lg">
        <div className="container max-w-2xl mx-auto px-4 py-4">
          <Button
            className="w-full h-12 text-base font-semibold gradient-accent hover:opacity-90 transition-opacity"
            onClick={handleChatClick}
          >
            {isUnlocked ? "继续与TA对话" : `与TA的数字分身对话 (¥9.9)`}
          </Button>
        </div>
      </div>

      {/* Payment Sheet */}
      {showPayment && (
        <PaymentSheet
          mentor={mentor}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default MentorProfile;
