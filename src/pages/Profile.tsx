import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, User as UserIcon, TrendingUp, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    major: "",
    university: "",
    grade: "",
    universityType: "",
    mbti: "",
    gender: "",
    tendency: "",
    goals: [] as string[],
    customGoal: "",
    careerDirection: "",
    skills: "",
  });

  // Mock user data
  const user = {
    name: "微信用户",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
  };

  const gradeOptions = [
    "大一", "大二", "大三", "大四", 
    "毕业1年内", "毕业1-3年", "毕业3-5年"
  ];

  const mbtiTypes = [
    "INTJ", "INTP", "ENTJ", "ENTP",
    "INFJ", "INFP", "ENFJ", "ENFP",
    "ISTJ", "ISFJ", "ESTJ", "ESFJ",
    "ISTP", "ISFP", "ESTP", "ESFP",
    "不确定"
  ];

  const goalOptions = [
    "求职焦虑", "专业不对口", "迷茫不知道方向",
    "想提升技术", "想转行", "想考研/考公", "想了解某个行业"
  ];

  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      goals: checked 
        ? [...prev.goals, goal]
        : prev.goals.filter(g => g !== goal)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setOpen(false);
  };

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
        <Card className="overflow-hidden shadow-lg border-0">
          <div className="bg-gradient-brand p-6 pb-8">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20 border-4 border-white shadow-xl ring-2 ring-primary/20">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-2xl bg-background">{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-white">
                <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">普通会员</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 p-4 bg-card">
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary mb-1">0</div>
              <div className="text-xs text-muted-foreground">咨询次数</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary mb-1">0</div>
              <div className="text-xs text-muted-foreground">导师数量</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary mb-1">0</div>
              <div className="text-xs text-muted-foreground">学习时长</div>
            </div>
          </div>
        </Card>

        {/* My Information Module */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Card className="p-5 shadow-card hover:bg-secondary/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <UserIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">我的信息</h3>
                  <p className="text-sm text-muted-foreground">完善个人信息</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              </div>
            </Card>
          </DialogTrigger>
          
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>完善个人信息</DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              {/* 专业 */}
              <div className="space-y-2">
                <Label htmlFor="major">你的专业是？</Label>
                <Input
                  id="major"
                  value={formData.major}
                  onChange={(e) => setFormData({...formData, major: e.target.value})}
                  placeholder="请输入你的专业"
                />
              </div>

              {/* 大学 */}
              <div className="space-y-2">
                <Label htmlFor="university">你的大学是？</Label>
                <Input
                  id="university"
                  value={formData.university}
                  onChange={(e) => setFormData({...formData, university: e.target.value})}
                  placeholder="请输入你的大学"
                />
              </div>

              {/* 年级 */}
              <div className="space-y-2">
                <Label htmlFor="grade">你目前是大学哪个年级/已毕业多久？</Label>
                <Select value={formData.grade} onValueChange={(value) => setFormData({...formData, grade: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeOptions.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 大学类型 */}
              <div className="space-y-2">
                <Label htmlFor="universityType">你目前就读的大学类型是？</Label>
                <Select value={formData.universityType} onValueChange={(value) => setFormData({...formData, universityType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="985/211/双一流">985/211/双一流</SelectItem>
                    <SelectItem value="普通一本">普通一本</SelectItem>
                    <SelectItem value="普通二本/三本">普通二本/三本</SelectItem>
                    <SelectItem value="专科">专科</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* MBTI */}
              <div className="space-y-2">
                <Label htmlFor="mbti">你的MBTI是？</Label>
                <Select value={formData.mbti} onValueChange={(value) => setFormData({...formData, mbti: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent>
                    {mbtiTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* 性别 */}
              <div className="space-y-2">
                <Label htmlFor="gender">你的性别是？</Label>
                <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="男">男</SelectItem>
                    <SelectItem value="女">女</SelectItem>
                    <SelectItem value="不便透露">不便透露</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 倾向 */}
              <div className="space-y-2">
                <Label htmlFor="tendency">你的倾向？</Label>
                <Select value={formData.tendency} onValueChange={(value) => setFormData({...formData, tendency: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="就业">就业</SelectItem>
                    <SelectItem value="考研">考研</SelectItem>
                    <SelectItem value="考公">考公</SelectItem>
                    <SelectItem value="出国">出国</SelectItem>
                    <SelectItem value="其它">其它</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 困惑或目标 */}
              <div className="space-y-2">
                <Label>你目前最大的困惑或目标是什么？</Label>
                <div className="space-y-2">
                  {goalOptions.map((goal) => (
                    <div key={goal} className="flex items-center space-x-2">
                      <Checkbox
                        id={goal}
                        checked={formData.goals.includes(goal)}
                        onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                      />
                      <Label htmlFor={goal} className="font-normal cursor-pointer">{goal}</Label>
                    </div>
                  ))}
                </div>
                <Input
                  value={formData.customGoal}
                  onChange={(e) => setFormData({...formData, customGoal: e.target.value})}
                  placeholder="其他（自定义输入）"
                  className="mt-2"
                />
              </div>

              {/* 职业方向 */}
              <div className="space-y-2">
                <Label htmlFor="career">你有没有一些想去尝试的职业方向或心仪的公司类型？</Label>
                <Textarea
                  id="career"
                  value={formData.careerDirection}
                  onChange={(e) => setFormData({...formData, careerDirection: e.target.value})}
                  placeholder="请输入你的想法"
                  rows={3}
                />
              </div>

              {/* 技能经验 */}
              <div className="space-y-2">
                <Label htmlFor="skills">目前你有哪些比较突出的技能、项目或实习经验？</Label>
                <Textarea
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                  placeholder="请输入你的技能和经验"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full">保存信息</Button>
            </form>
          </DialogContent>
        </Dialog>
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
