import { X, CheckCircle2 } from "lucide-react";
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

  const leftBenefits = [
    "与亲托无限对话",
    "24小时在线",
    "深度行业认知",
    "专属对话记忆",
    "深度追踪你的成长",
  ];

  const rightBenefits = [
    "个人背景深度梳理",
    "求职岗位揭秘",
    "技能提升路径",
    "如何拿到心仪工作",
    "真实成功案例",
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
          {/* Price Section */}
          <div className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              买入咨询价 <span className="line-through">¥799/小时</span>
            </p>
            <Card className="p-6 bg-muted/30">
              <p className="text-sm text-muted-foreground mb-2">限时特惠</p>
              <div className="text-5xl font-bold text-[#1890ff]">¥9.9</div>
            </Card>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column - 1v1答疑 */}
            <div className="space-y-3">
              <h3 className="font-semibold text-center mb-4">1v1答疑</h3>
              {leftBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#52c41a] flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Right Column - 专属报告 */}
            <div className="space-y-3">
              <h3 className="font-semibold text-center mb-4">专属报告</h3>
              {rightBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#52c41a] flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="h-12 text-base font-medium"
            >
              取消
            </Button>
            <Button
              onClick={handlePayment}
              className="h-12 text-base font-semibold bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white"
            >
              立即支付
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSheet;
