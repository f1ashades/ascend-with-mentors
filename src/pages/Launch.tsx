import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Launch = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 0: Show slogan
    const timer1 = setTimeout(() => setStep(1), 1500);
    
    // Step 1: Show logo
    const timer2 = setTimeout(() => setStep(2), 2500);
    
    // Step 2: Show benefit points
    const timer3 = setTimeout(() => setStep(3), 3500);
    
    // Navigate to home
    const timer4 = setTimeout(() => navigate("/home"), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Slogan */}
      <div
        className={`transition-all duration-1000 ${
          step >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        } ${step >= 1 ? "-translate-y-8" : ""}`}
      >
        <h1 className="text-2xl font-bold text-center text-foreground tracking-wide">
          一次链接，看见新的未来
        </h1>
      </div>

      {/* Logo */}
      {step >= 1 && (
        <div className="mt-12 animate-fade-in">
          <div className="w-32 h-32 rounded-3xl bg-gradient-brand flex items-center justify-center shadow-float">
            <svg
              className="w-16 h-16 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Benefit Points */}
      {step >= 2 && (
        <div className="mt-16 space-y-4 w-full max-w-sm">
          {[
            { text: '与顶尖前辈"真人"对话', delay: 0 },
            { text: "探索职业的万种可能", delay: 200 },
            { text: "获得专属的成长路线", delay: 400 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 opacity-0 animate-slide-up"
              style={{ animationDelay: `${item.delay}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <p className="text-base text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Launch;
