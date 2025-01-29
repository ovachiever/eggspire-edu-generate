import { Egg, Building2, Users } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { DepartmentCard } from "@/components/DepartmentCard";
import { CourseCard } from "@/components/CourseCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 space-y-8">
        <HeroSection />
        
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Departments</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DepartmentCard
              title="Operations"
              description="Learn AI applications in egg production, quality control, and facility management."
              icon={Egg}
              courseCount={4}
            />
            <DepartmentCard
              title="Back Office"
              description="Discover how AI can streamline administrative tasks and improve efficiency."
              icon={Building2}
              courseCount={3}
            />
            <DepartmentCard
              title="Management"
              description="Master AI tools for team leadership and strategic decision-making."
              icon={Users}
              courseCount={2}
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Featured Courses</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              title="AI Basics for Egg Production"
              description="Learn the fundamentals of AI and its applications in egg production."
              duration="2 hours"
              progress={75}
              lessons={5}
            />
            <CourseCard
              title="ChatGPT for Documentation"
              description="Streamline your documentation process using ChatGPT."
              duration="1.5 hours"
              progress={30}
              lessons={4}
            />
            <CourseCard
              title="AI Safety & Ethics"
              description="Understanding responsible AI usage in the workplace."
              duration="1 hour"
              progress={0}
              lessons={3}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;