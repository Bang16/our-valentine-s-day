import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/FloatingHearts";

type Screen = "welcome" | "question" | "notYet" | "yes";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (screen === "yes") {
      const timer = setTimeout(() => {
        setShowThankYou(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  const renderScreen = () => {
    switch (screen) {
      case "welcome":
        return (
          <div className="flex flex-col items-center gap-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground text-center leading-relaxed">
              Happy Valentine's Day, Bun ❤️
            </h1>
            <Button
              onClick={() => setScreen("question")}
              className="mt-4 px-10 py-6 text-lg rounded-full bg-primary hover:bg-blush-dark text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Continue
            </Button>
          </div>
        );

      case "question":
        return (
          <div className="flex flex-col items-center gap-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-center leading-relaxed">
              Did you receive your package? 🎁
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                onClick={() => setScreen("yes")}
                className="px-10 py-6 text-lg rounded-full bg-primary hover:bg-blush-dark text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Yes
              </Button>
              <Button
                onClick={() => setScreen("notYet")}
                variant="outline"
                className="px-10 py-6 text-lg rounded-full border-2 border-primary text-foreground hover:bg-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Not yet
              </Button>
            </div>
          </div>
        );

      case "notYet":
        return (
          <div className="flex flex-col items-center gap-8 animate-fade-in text-center max-w-md">
            <p className="text-3xl md:text-4xl font-medium text-foreground leading-relaxed">
              Okay 🥹
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
              Come back once you do…<br />
              this moment is worth it.
            </p>
          </div>
        );

      case "yes":
        return (
          <div className="flex flex-col items-center gap-8 animate-fade-in text-center max-w-lg px-4">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed">
                Meet me at Paralia after work.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed">
                I heart you more ❤️
              </p>
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                Dress cute. I'll be smiling the whole time.
              </p>
            </div>
            
            <div 
              className={`mt-8 transition-opacity duration-1000 ${
                showThankYou ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg md:text-xl text-primary font-medium animate-pulse-soft">
                Thank you for being you.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <FloatingHearts enhanced={screen === "notYet"} />
      
      <main className="relative z-10 container mx-auto px-6 py-12">
        {renderScreen()}
      </main>
    </div>
  );
};

export default Index;
