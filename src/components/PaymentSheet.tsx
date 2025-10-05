import { X, Sparkles, MessageCircle, Database, Gift, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface PaymentSheetProps {
  mentor: {
    name: string;
    avatar: string;
  };
  onClose: () => void;
  onSuccess: () => void;
}

const PaymentSheet = ({ mentor, onClose, onSuccess }: PaymentSheetProps) => {
  const { toast } = useToast();

  const handlePayment = () => {
    // Simulate payment
    toast({
      title: "支付成功",
      description: `已成功解锁与 ${mentor.name} 的对话权限`,
    });
    onSuccess();
  };

  const benefits = [
    {
      icon: MessageCircle,
      title: "无限次对话",
      desc: "畅聊无阻，随时随地获取指导",
    },
    {
      icon: Sparkles,
      title: "独家经验分享",
      desc: "基于真实经历的深度见解",
    },
    {
      icon: Database,
      title: "专属对话记忆",
      desc: "AI记住你的情况，持续跟进",
    },
    {
      icon: Gift,
      title: "赠送资料包",
      desc: "职业发展必备工具和模板",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div
        className="fixed inset-x-0 bottom-0 bg-card rounded-t-3xl shadow-2xl animate-slide-in-bottom max-h-[90vh] overflow-y-auto"
        style={{ maxWidth: "640px", margin: "0 auto" }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 border-b px-6 py-4 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-lg font-semibold">解锁对话权限</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Price Comparison */}
          <div className="text-center space-y-3">
            <div className="inline-block px-4 py-2 rounded-full bg-muted">
              <p className="text-sm text-muted-foreground">
                真人咨询价 <span className="line-through">¥799/小时</span>
              </p>
            </div>
            <div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold gradient-accent bg-clip-text text-transparent">
                  ¥9.9
                </span>
                <span className="text-sm text-muted-foreground">限时特惠</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">仅需一杯咖啡的价格</p>
            </div>
          </div>

          {/* Benefits */}
          <Card className="p-5 space-y-4 shadow-card">
            <h3 className="font-semibold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              解锁全部权益
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-0.5">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Premium Option (Disabled) */}
          <Card className="p-5 bg-secondary/50 opacity-60">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold flex items-center gap-2">
                <Lock className="w-5 h-5" />
                解锁全部导师
              </h3>
              <span className="text-lg font-bold">¥99</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              一次性解锁平台所有导师，享受无限制成长指导
            </p>
            <Button variant="secondary" disabled className="w-full">
              敬请期待
            </Button>
          </Card>

          {/* Payment Button */}
          <Button
            onClick={handlePayment}
            className="w-full h-12 text-base font-semibold gradient-accent hover:opacity-90 transition-opacity"
          >
            立即支付 ¥9.9
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            支付即代表同意《服务协议》和《隐私政策》
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSheet;
