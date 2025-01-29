import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <img
        src="/lovable-uploads/f6072392-c3fa-4ebf-a41d-ee23f2134c56.png"
        alt="AI Training Hub"
        className="h-8 sm:h-10"
      />
      <h1 className="text-3xl font-bold sm:text-4xl">AI Training Hub</h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Enhance your work with AI tools at Versova. Access personalized training
        modules and track your progress.
      </p>
      <div className="flex gap-4">
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
  );
};