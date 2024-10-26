// app/dashboard/Dashboard.jsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileIcon, CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { User } from "../../types/types";
import { ChartComponent } from "@/components/ComplianceChart";

// Interfaces

export default function Dashboard({ user }: { user: User }) {
  const router = useRouter();
  const numberOfDocumentsToDisplay = 7;
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary">
          Welcome, {user?.companyName}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recent Documents Card */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
              <CardDescription>Your latest uploads and edits</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full pr-4">
                {user?.documents
                  .slice(0, numberOfDocumentsToDisplay)
                  .map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center space-x-4 mb-4"
                    >
                      <FileIcon className="h-6 w-6 text-muted-foreground" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {doc.title}
                        </p>

                        <p className="text-sm text-muted-foreground flex items-center">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          {new Date(doc.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
              </ScrollArea>
              <Button
                onClick={() => router.push("/dashboard/documents")}
                className="mt-4 w-full"
              >
                View All Documents
              </Button>
            </CardContent>
          </Card>

          {/* Compliance Status Card */}
          <Card className="flex flex-col space-y-14">
            <CardHeader>
              <CardTitle>TruckDocs™ Compliance Status</CardTitle>
              <CardDescription>Your current compliance score</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartComponent dotComplianceScore={user?.dotComplianceScore} />
            </CardContent>
          </Card>

          {/* Storage Usage Card */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Storage Usage</CardTitle>
              <CardDescription>75% of 1GB used</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={75} className="w-full" />
                <p className="text-sm text-muted-foreground">
                  750MB used out of 1GB
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
