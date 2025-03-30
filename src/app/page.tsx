"use client";

import ScrollVelocity from "@/components/ScrollVelocity/ScrollVelocity";
import TrueFocus from "@/components/TrueFocus/TrueFocus";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-br from-black to-gray-900 ">
      </div>
      <div className="container mx-auto px-8 py-8 md:px-8 md:py-16">
        <div className="text-center">
          <div className="mt-30 font-sans text-4xl font-bold text-white max-w-5xl lg:text-7xl md:text-6xl">
            Official Website Of{" "}
            <TrueFocus
              sentence="DE CODE SECRETARY"
              manualMode={false}
              blurAmount={5}
              borderColor="blue"
              animationDuration={1}
              pauseBetweenAnimations={1}
            />
          </div>
          <div className="max-w-2xl text-center mx-auto font-serif text-base text-gray-400 mb-16 mt-4">
            Website ini dikelola langsung oleh Sekretaris De Code <br />menyediakan informasi dan Layanan mengenai Kesekretariatan De Code
          </div>
        </div>
      </div>
      <div className="text-base bg-gradient-to-br from-black to-gray-900 rounded-lg h-50 md:rounded-l-full -mr-24">
        <ScrollVelocity
          texts={['Next JS | React Bits | Tailwind CSS | Shadcn UI | Framer Motion |', 'PostgreSQL | Prisma | TypeScript | Node JS |']}
          velocity={50}
          className="custom-scroll-text text-4xl font-bold text-white  "
        />
      </div>
    </div>
  );
}
