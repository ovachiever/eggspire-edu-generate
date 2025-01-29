import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons_count: number;
  department: string;
  progress?: number;
}

export const useModules = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ["modules", user?.id],
    queryFn: async () => {
      const { data: modules, error: modulesError } = await supabase
        .from("modules")
        .select("*");

      if (modulesError) throw modulesError;

      if (user) {
        const { data: progress, error: progressError } = await supabase
          .from("user_progress")
          .select("*")
          .eq("user_id", user.id);

        if (progressError) throw progressError;

        return modules.map((module) => ({
          ...module,
          progress: progress.find((p) => p.module_id === module.id)?.progress || 0,
        }));
      }

      return modules.map((module) => ({ ...module, progress: 0 }));
    },
  });
};