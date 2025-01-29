import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12 px-4 sm:px-6 lg:px-8 rounded-lg animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/3f2cc93f-08e0-42ba-b23b-00c409cdfe86.png" 
            alt="Versova Logo" 
            className="h-8 sm:h-10 w-auto"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-5xl mb-4">
          AI Training Hub
        </h1>
        <p className="text-xl text-gray-600">
          Enhance your productivity with generative AI in your role at Versova
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {user ? (
            <>
              <Button size="lg">Start Learning</Button>
              <Button variant="outline" onClick={signOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <Button size="lg" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};