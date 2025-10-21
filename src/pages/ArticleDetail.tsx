import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data
  const article = {
    id: Number(id),
    title: "从0到1：我在字节跳动做产品的3年经验总结",
    mentor: {
      id: 1,
      name: "张明",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang",
      title: "字节跳动 · 高级产品经理",
    },
    publishDate: "2024-01-15",
    readTime: "8分钟",
    content: `
      <h2>前言</h2>
      <p>三年前，我从一名应届毕业生加入字节跳动，开始了我的产品经理生涯。这三年里，我经历了从0到1搭建新产品的全过程，也参与了成熟产品的优化迭代。今天想和大家分享一些我的心得体会。</p>

      <h2>一、产品思维的建立</h2>
      <p>初入职场时，我以为产品经理就是写写需求文档、画画原型图。但很快我发现，这只是最基础的技能。真正重要的是产品思维的建立。</p>
      
      <p><strong>什么是产品思维？</strong></p>
      <p>简单来说，就是用户思维 + 商业思维 + 技术思维的结合。你需要站在用户的角度思考问题，同时也要考虑公司的商业目标，以及技术实现的可行性。</p>

      <h2>二、从需求到落地的全流程</h2>
      <p>一个产品从想法到最终上线，中间有很多环节。我总结了一个自己的工作流程：</p>
      
      <ol>
        <li><strong>需求调研</strong>：深入了解用户痛点，收集各方反馈</li>
        <li><strong>方案设计</strong>：基于调研结果，设计解决方案</li>
        <li><strong>评审沟通</strong>：与设计、技术团队充分沟通，确保可行性</li>
        <li><strong>跟进开发</strong>：及时响应开发过程中的问题</li>
        <li><strong>数据验证</strong>：上线后持续关注数据，快速迭代</li>
      </ol>

      <h2>三、一些建议</h2>
      <p>给想要入行或刚入行的产品新人一些建议：</p>
      
      <ul>
        <li>保持好奇心，多体验不同的产品</li>
        <li>培养同理心，真正理解用户需求</li>
        <li>提升沟通能力，学会与不同角色协作</li>
        <li>关注数据，让数据指导决策</li>
        <li>持续学习，行业变化很快</li>
      </ul>

      <h2>结语</h2>
      <p>产品经理这条路并不容易，但也充满乐趣。如果你对此感兴趣，不妨来和我聊聊，我很乐意分享更多的经验和见解。</p>
    `,
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
          <span className="text-sm font-medium">文章详情</span>
        </div>
      </header>

      <article className="container max-w-2xl mx-auto px-4 py-6">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6 leading-tight">{article.title}</h1>

        {/* Author Info */}
        <div className="flex items-center justify-between mb-6 pb-6 border-b">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-background">
              <AvatarImage src={article.mentor.avatar} />
              <AvatarFallback>{article.mentor.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">{article.mentor.name}</h3>
              <p className="text-xs text-muted-foreground">{article.mentor.title}</p>
            </div>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            <p>{article.publishDate}</p>
            <div className="flex items-center gap-1 justify-end mt-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            lineHeight: "1.8",
          }}
        />
      </article>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 border-t shadow-lg">
        <div className="container max-w-2xl mx-auto px-4 py-4 space-y-2">
          <Button
            className="w-full h-12 text-base font-semibold bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white transition-colors"
            onClick={() => navigate(`/mentor/${article.mentor.id}`)}
          >
            和TA链接
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            专属报告 + 无限答疑
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
