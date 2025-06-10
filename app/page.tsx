"use client";
import MessageBoard from "@/components/MessageBoard/MessageBoard";
import SplitText from "@/components/react-bits-ui/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 p-5 md:min-w-xl min-w-sm max-w-xl">
      <div className="flex justify-center py-5">
        <SplitText
          text="🎂 Birthday Messages Wall🎈"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      <MessageBoard />
    </main>
  );
}
