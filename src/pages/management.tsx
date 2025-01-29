import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { UserRound, UsersRound, Briefcase, Building } from "lucide-react";

const Management = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Management Training</h1>
          <p className="text-xl text-muted-foreground">
            Discover AI-powered tools and techniques to enhance your management capabilities
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/management/team-leadership">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <UsersRound className="w-6 h-6 text-primary" />
                  <CardTitle>Team Leadership</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn effective team management strategies and leadership skills enhanced by AI
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/management/operations">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building className="w-6 h-6 text-primary" />
                  <CardTitle>Operations Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master operational efficiency and process optimization using AI tools
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/management/executive">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <CardTitle>Executive Leadership</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop strategic decision-making and organizational leadership skills with AI support
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Management;