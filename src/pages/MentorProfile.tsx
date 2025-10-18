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

      <div className="container max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Profile Header - Centered */}
        <div className="text-center space-y-4 pb-6">
          <Avatar className="w-24 h-24 mx-auto border-4 border-background shadow-lg">
            <AvatarImage src={mentor.avatar} />
            <AvatarFallback className="text-3xl">{mentor.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold mb-2">{mentor.name}</h1>
            <p className="text-sm text-muted-foreground mb-4">{mentor.title}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {mentor.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Bio */}
        <Card className="p-5 shadow-card">
          <p className="text-sm leading-relaxed text-muted-foreground">{mentor.bio}</p>
        </Card>

        {/* Details Info */}
        <Card className="p-5 shadow-card space-y-3">
          <div className="flex items-start gap-3 text-sm">
            <span className="text-muted-foreground">📍 工作城市：</span>
            <span className="font-medium">深圳</span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="text-muted-foreground">🎓 学历：</span>
            <span className="font-medium">普通一本 · 计算机</span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="text-muted-foreground">💼 工作经验：</span>
            <span className="font-medium">8年</span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <span className="text-muted-foreground">📈 薪资水平：</span>
            <span className="font-medium">60W+期权</span>
          </div>
        </Card>

        {/* Career Experience */}
        <Card className="p-5 shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="font-semibold">代表性经历</h2>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            毕业后在一家小创业公司做IT杂活的"新媒体小编"，每天追热点、写段子、搞抽奖，在用户只有几千人的情况下，她硬是靠着天天跟用户和组织线下活动，把一个QQ群做成了极度活跃的"铁杆粉丝群"。后来她开始总结自己做社群的SOP和方法论，并不断在各个项目中验证。因其出色的用户连接能力和从0到1的增长建设经验，被现在这家公司高薪挖走，负责整个用户增长和私域流量体系。
          </p>
        </Card>

        {/* Source Info */}
        <Card className="p-5 shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold mb-2 text-primary">智慧来源</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                这位导师的"数字分身"由真实的行业精英深度参与创建。我们花费数十小时，将他的真实成长历程、决策逻辑、方法论完整注入AI模型，确保每一次对话都充满真实感和专业度。
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 border-t shadow-lg">
        <div className="container max-w-2xl mx-auto px-4 py-4">
          <Button
            className="w-full h-12 text-base font-semibold bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white transition-colors"
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
