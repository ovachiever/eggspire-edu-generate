import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  courseCount: number;
}

export function DepartmentCard({ title, description, icon: Icon, courseCount }: DepartmentCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardHeader className="space-y-1">
        <div className="flex items-center space-x-3">
          <Icon className="w-6 h-6 text-primary" />
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="text-sm text-gray-500">
          {courseCount} {courseCount === 1 ? 'course' : 'courses'} available
        </div>
      </CardContent>
    </Card>
  );
}