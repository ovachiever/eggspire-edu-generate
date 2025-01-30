import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building2, Users2, Calculator } from "lucide-react";
import { useModules } from '@/hooks/useModules';

const BackOffice = () => {
  const { data: modules } = useModules();

  const getModuleCount = (department: string) => {
    return modules?.filter(module => module.department === department).length || 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Back Office Training</h1>
          <p className="text-xl text-muted-foreground">
            Discover AI-powered tools and techniques to enhance your back office operations
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/backoffice/hr">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users2 className="w-6 h-6 text-primary" />
                  <CardTitle>Human Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn how AI can streamline HR processes, from recruitment to employee management
                </p>
                <p className="text-sm text-muted-foreground">
                  {getModuleCount('HR')} courses available
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/backoffice/it">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-6 h-6 text-primary" />
                  <CardTitle>Information Technology</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Master AI tools for IT infrastructure management and support
                </p>
                <p className="text-sm text-muted-foreground">
                  {getModuleCount('IT')} courses available
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/backoffice/accounting">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calculator className="w-6 h-6 text-primary" />
                  <CardTitle>Accounting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore AI applications in financial management and reporting
                </p>
                <p className="text-sm text-muted-foreground">
                  {getModuleCount('Accounting')} courses available
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackOffice;