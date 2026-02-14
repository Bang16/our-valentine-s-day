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
              Will you be my Valentines? 🥰
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
                No
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
              Come back once you wanna be…<br />
            </p>
          </div>
        );

      case "yes":
        return (
          <div className="flex flex-col items-center gap-8 animate-fade-in text-center max-w-lg px-4">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed">
                This is our first Valentine’s Day without each other.

                And I won’t pretend it feels normal.

                If things were different, if timing, space, and distance hadn’t found their way between us, I believe we’d be writing another love story right now.
                Maybe a quieter one.
                Maybe a stronger one.
                But still ours.
                  
                I didn’t build this site to change your mind.
                I built it because loving you has always felt honest to me.
                  
                We’ve known each other for so long that you don’t feel like just a memory I can fold away.
                You’ve been part of my growth, part of my becoming, part of who I am.
                And when distance started showing up, it wasn’t small.
                It felt like something meaningful was slowly shifting into something uncertain.
                  
                I won’t act like I didn’t feel it.
                I felt the confusion.
                I felt the insecurity.
                I felt the fear of losing something that once felt so sure.
                  
                But through all of that, one thing stayed steady:
                What I felt for you was real.
                  
                I don’t want half-love.
                I don’t want to compete.
                I don’t want to wonder where I stand.
                  
                I want something chosen.
                Freely.
                Fully.
                Without hesitation.
                  
                If that’s not where we are anymore, I’ll accept it even if it’s painful.
                Because love shouldn’t have to convince. It should align.
                  
                I’m not here to pressure you.
                I’m not here to hold you emotionally.
                I’m just here to be honest.
                    
                And if this is the end of our chapter, I’ll still be grateful it existed.
                But if there’s even a page left unwritten, I hope it’s written with clarity, not confusion.

                Whatever tomorrow brings,
                I just needed today to be real.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed">
                Take Care and I will see you tomorrow ❤️
              </p>
              <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                Dress cute. I'll be smiling the whole time.😍
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
