import { useModules } from "@/hooks/useModules";
import { CourseCard } from "@/components/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Production = () => {
  const { data: modules, isLoading } = useModules();

  const productionModules = modules?.filter(
    (module) => module.department === "Operations"
  ) || [];

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Production Operations Training</h1>
          <p>Loading modules...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Production Operations Training</h1>
          <p className="text-xl text-muted-foreground">
            Master AI-powered tools and techniques for optimizing egg production
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All Modules</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productionModules.map((module) => (
                <CourseCard key={module.id} {...module} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productionModules
                .filter((module) => module.progress > 0 && module.progress < 100)
                .map((module) => (
                  <CourseCard key={module.id} {...module} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productionModules
                .filter((module) => module.progress === 100)
                .map((module) => (
                  <CourseCard key={module.id} {...module} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Production;