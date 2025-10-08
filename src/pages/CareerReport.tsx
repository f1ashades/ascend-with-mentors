import { ArrowLeft, Download, Share2, TrendingUp, Target, Brain, Lightbulb, Calendar } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const CareerReport = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - 实际项目中从后端获取
  const reportData = {
    mentorName: "张明",
    mentorTitle: "谷歌高级工程师",
    generatedDate: "2024年1月15日",
    studentName: "李华",
    major: "计算机科学",
    
    overview: {
      score: 85,
      level: "优秀",
      summary: "你展现出了扎实的技术基础和良好的学习能力，在编程思维和问题解决能力方面表现突出。通过系统性的学习规划和实践积累，你有很大潜力在技术领域取得成功。"
    },
    
    strengths: [
      { title: "编程基础", score: 90, description: "扎实的编程功底，代码规范性好" },
      { title: "学习能力", score: 85, description: "快速学习新技术的能力强" },
      { title: "问题解决", score: 80, description: "分析和解决问题的思路清晰" },
      { title: "项目经验", score: 75, description: "有一定的项目实践经验" }
    ],
    
    improvements: [
      { title: "系统设计", priority: "高", description: "需要加强大型系统的架构设计能力" },
      { title: "算法优化", priority: "中", description: "提升算法分析和性能优化能力" },
      { title: "团队协作", priority: "中", description: "增强跨团队沟通和协作经验" }
    ],
    
    roadmap: [
      {
        phase: "第1-3个月",
        title: "基础巩固期",
        tasks: [
          "深入学习数据结构与算法",
          "完成LeetCode 100道经典题目",
          "阅读《深入理解计算机系统》"
        ]
      },
      {
        phase: "第4-6个月",
        title: "项目实践期",
        tasks: [
          "参与开源项目贡献",
          "构建2个全栈个人项目",
          "学习系统设计原理"
        ]
      },
      {
        phase: "第7-12个月",
        title: "能力提升期",
        tasks: [
          "准备技术面试",
          "参加技术分享和交流",
          "构建个人技术品牌"
        ]
      }
    ],
    
    recommendations: [
      "建议每周至少投入15小时进行技术学习和实践",
      "参加技术社区活动，扩展人脉圈",
      "保持技术博客更新，记录学习心得",
      "关注行业动态，了解最新技术趋势"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/conversations")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold">职业发展规划报告</h1>
                <p className="text-sm text-muted-foreground">
                  生成于 {reportData.generatedDate}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                下载PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Mentor Info Card */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">指导导师</p>
                <p className="text-lg font-semibold">{reportData.mentorName}</p>
                <p className="text-sm text-muted-foreground">{reportData.mentorTitle}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">学生</p>
                <p className="text-lg font-semibold">{reportData.studentName}</p>
                <Badge variant="secondary">{reportData.major}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview Card */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <CardTitle>综合评估</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">{reportData.overview.score}</p>
                  <p className="text-sm text-muted-foreground">综合评分</p>
                </div>
                <Badge className="text-lg px-4 py-2">{reportData.overview.level}</Badge>
              </div>
              <Progress value={reportData.overview.score} className="h-2" />
              <p className="text-muted-foreground leading-relaxed">
                {reportData.overview.summary}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Strengths Card */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <CardTitle>能力优势</CardTitle>
            </div>
            <CardDescription>你在以下方面表现突出</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportData.strengths.map((strength, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{strength.title}</span>
                    <span className="text-sm text-muted-foreground">{strength.score}分</span>
                  </div>
                  <Progress value={strength.score} className="h-2" />
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                  {index < reportData.strengths.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Improvements Card */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle>提升方向</CardTitle>
            </div>
            <CardDescription>建议重点关注以下领域</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {reportData.improvements.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                  <Badge variant={item.priority === "高" ? "default" : "secondary"}>
                    {item.priority}
                  </Badge>
                  <div className="flex-1">
                    <p className="font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Roadmap Card */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle>学习路线图</CardTitle>
            </div>
            <CardDescription>分阶段的成长计划</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {reportData.roadmap.map((phase, index) => (
                <div key={index} className="relative">
                  {index !== reportData.roadmap.length - 1 && (
                    <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-border" />
                  )}
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="mb-2">
                        <Badge variant="outline" className="mb-2">{phase.phase}</Badge>
                        <h3 className="font-semibold text-lg">{phase.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations Card */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <CardTitle>导师建议</CardTitle>
            </div>
            <CardDescription>来自 {reportData.mentorName} 的专业建议</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {reportData.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{rec}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">
            有疑问？想要更深入的指导？
          </p>
          <Button size="lg" onClick={() => navigate(`/chat/${id}`)}>
            继续与导师交流
          </Button>
        </div>
      </main>
    </div>
  );
};

export default CareerReport;
