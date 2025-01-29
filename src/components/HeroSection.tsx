import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8 rounded-lg animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
          AI Training Hub
        </h1>
        <p className="text-xl text-gray-600">
          Enhance your work with AI-powered tools. Learn how to leverage generative AI
          in your role at EggCo.
        </p>
      </div>
    </div>
  );
}