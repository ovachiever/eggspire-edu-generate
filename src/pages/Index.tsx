import { Egg, Building2, Users } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { DepartmentCard } from "@/components/DepartmentCard";
import { CourseCard } from "@/components/CourseCard";
import { useModules } from "@/hooks/useModules";

const Index = () => {
  const { data: modules, isLoading } = useModules();

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
              courseCount={modules?.filter(m => m.department === "Operations").length ?? 0}
              route="/operations"
            />
            <DepartmentCard
              title="Back Office"
              description="Discover how AI can streamline administrative tasks and improve efficiency."
              icon={Building2}
              courseCount={modules?.filter(m => m.department === "Back Office").length ?? 0}
              route="/backoffice"
            />
            <DepartmentCard
              title="Management"
              description="Master AI tools for team leadership and strategic decision-making."
              icon={Users}
              courseCount={modules?.filter(m => m.department === "Management").length ?? 0}
              route="/management"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Featured Courses</h2>
          {isLoading ? (
            <div>Loading courses...</div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {modules?.map((module) => (
                <CourseCard key={module.id} {...module} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;