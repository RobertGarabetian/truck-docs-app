"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
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
import { RadialBar, RadialBarChart, PolarAngleAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

interface Document {
  id: number;
  title: string;
  createdAt: string;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    } else if (session) {
      fetchDocuments();
    }
  }, [session, status, router]);

  const fetchDocuments = async () => {
    // Mock fetch - replace with actual API call
    const mockDocuments = [
      {
        id: 1,
        title: "Q2 Financial Report",
        createdAt: "2023-06-01T12:00:00Z",
      },
      {
        id: 2,
        title: "Marketing Strategy 2023",
        createdAt: "2023-06-02T14:30:00Z",
      },
      { id: 3, title: "Product Roadmap", createdAt: "2023-06-03T09:15:00Z" },
      {
        id: 4,
        title: "Team Performance Review",
        createdAt: "2023-06-04T11:45:00Z",
      },
    ];
    setDocuments(mockDocuments);
  };

  const dotComplianceScore = 85; // Replace with actual score from your data

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-primary">
          Welcome, {session?.user?.name || session?.user?.email}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2 lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Documents</CardTitle>
              <CardDescription>Your latest uploads and edits</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full pr-4">
                {documents.map((doc) => (
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

          <Card>
            <CardHeader>
              <CardTitle>TruckDocs&trade; Compliance Status</CardTitle>
              <CardDescription>Your current compliance score</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  score: {
                    label: "Score",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="w-full aspect-square"
              >
                <RadialBarChart
                  width={300}
                  height={300}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  data={[{ name: "score", value: dotComplianceScore }]}
                  startAngle={180}
                  endAngle={0}
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                  />
                  <RadialBar
                    background
                    dataKey="value"
                    cornerRadius={30}
                    fill="var(--color-score)"
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-primary text-4xl font-bold"
                  >
                    {dotComplianceScore}
                  </text>
                </RadialBarChart>
              </ChartContainer>
              <p className="text-center mt-4 text-sm text-muted-foreground">
                Your DOT compliance score is {dotComplianceScore}/100
              </p>
            </CardContent>
          </Card>

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
// "use client";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { FileIcon, CalendarIcon, BarChartIcon } from "lucide-react";

// interface Document {
//   id: number;
//   title: string;
//   createdAt: string;
// }

// export default function Dashboard() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const [documents, setDocuments] = useState<Document[]>([]);

//   useEffect(() => {
//     if (!session && status !== "loading") {
//       router.push("/login");
//     } else if (session) {
//       fetchDocuments();
//     }
//   }, [session, status, router]);

//   const fetchDocuments = async () => {
//     // Mock fetch - replace with actual API call
//     const mockDocuments = [
//       {
//         id: 1,
//         title: "Q2 Financial Report",
//         createdAt: "2023-06-01T12:00:00Z",
//       },
//       {
//         id: 2,
//         title: "Marketing Strategy 2023",
//         createdAt: "2023-06-02T14:30:00Z",
//       },
//       { id: 3, title: "Product Roadmap", createdAt: "2023-06-03T09:15:00Z" },
//       {
//         id: 4,
//         title: "Team Performance Review",
//         createdAt: "2023-06-04T11:45:00Z",
//       },
//     ];
//     setDocuments(mockDocuments);
//   };

//   return (
//     <div className="min-h-screen bg-background p-8">
//       <div className="max-w-7xl mx-auto space-y-8">
//         <h1 className="text-4xl font-bold text-primary">
//           Welcome, {session?.user?.name || session?.user?.email}!
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <Card className="col-span-1 md:col-span-2 lg:col-span-2">
//             <CardHeader>
//               <CardTitle>Recent Documents</CardTitle>
//               <CardDescription>Your latest uploads and edits</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ScrollArea className="h-[300px] w-full pr-4">
//                 {documents.map((doc) => (
//                   <div
//                     key={doc.id}
//                     className="flex items-center space-x-4 mb-4"
//                   >
//                     <FileIcon className="h-6 w-6 text-muted-foreground" />
//                     <div className="space-y-1">
//                       <p className="text-sm font-medium leading-none">
//                         {doc.title}
//                       </p>
//                       <p className="text-sm text-muted-foreground flex items-center">
//                         <CalendarIcon className="h-3 w-3 mr-1" />
//                         {new Date(doc.createdAt).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </ScrollArea>
//               <Button
//                 onClick={() => router.push("/dashboard/documents")}
//                 className="mt-4 w-full"
//               >
//                 View All Documents
//               </Button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Storage Usage</CardTitle>
//               <CardDescription>75% of 1GB used</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <Progress value={75} className="w-full" />
//                 <p className="text-sm text-muted-foreground">
//                   750MB used out of 1GB
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Future Content</CardTitle>
//               <CardDescription>Coming soon</CardDescription>
//             </CardHeader>
//             <CardContent className="flex items-center justify-center h-[200px]">
//               <BarChartIcon className="h-16 w-16 text-muted-foreground" />
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
