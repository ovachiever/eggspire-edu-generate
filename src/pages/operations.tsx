import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Factory, Truck, ClipboardList } from "lucide-react";

const Operations = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Operations Training</h1>
          <p className="text-xl text-muted-foreground">
            Master AI-powered tools and techniques for operational excellence
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/production">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Factory className="w-6 h-6 text-primary" />
                  <CardTitle>Production Operations</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn AI applications in egg production, quality control, and facility management
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/operations/logistics">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-primary" />
                  <CardTitle>Logistics & Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimize transportation, inventory management, and supply chain operations with AI
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/operations/quality">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <ClipboardList className="w-6 h-6 text-primary" />
                  <CardTitle>Quality Assurance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Enhance quality control processes and compliance monitoring using AI tools
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Operations;