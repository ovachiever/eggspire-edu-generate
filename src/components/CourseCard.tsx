import { Clock, BookOpen } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  progress: number;
  lessons: number;
}

export function CourseCard({ title, description, duration, progress, lessons }: CourseCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">{description}</p>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-2" />
            {lessons} lessons
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-gray-500">
          {progress}% complete
        </div>
      </CardFooter>
    </Card>
  );
}