// "use client";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import UploadDocumentModal from "@/components/UploadDocumentModal";
// import {
//   PlusIcon,
//   FileIcon,
//   CalendarIcon,
//   ExternalLinkIcon,
// } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// interface DocumentWithTag {
//   id: number;
//   title: string;
//   fileUrl: string;
//   tag: {
//     id: number;
//     name: string;
//   };
//   userId: number;
//   createdAt: string;
//   updatedAt: string;
// }

// export default function DashboardPage() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const [documents, setDocuments] = useState<DocumentWithTag[]>([]);
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [availableTags, setAvailableTags] = useState<
//     { id: number; name: string }[]
//   >([]);
//   const [activeTab, setActiveTab] = useState<string>("0");

//   useEffect(() => {
//     if (!session && status !== "loading") {
//       router.push("/login");
//     } else if (session) {
//       fetchDocuments();
//       fetchTags();
//     }
//   }, [session, status, router]);

//   const fetchDocuments = async () => {
//     const res = await fetch("/api/documents");
//     if (res.ok) {
//       const data = await res.json();
//       setDocuments(data);
//     }
//   };

//   const fetchTags = async () => {
//     const res = await fetch("/api/tags");
//     if (res.ok) {
//       const data = await res.json();
//       setAvailableTags([{ id: 0, name: "All" }, ...data]);
//     }
//   };

//   const filteredDocuments = documents.filter((doc) =>
//     activeTab === "0" ? true : doc.tag.id.toString() === activeTab
//   );

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto p-6 space-y-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold tracking-tight">
//             Document Dashboard
//           </h1>
//           <Button onClick={() => setShowUploadModal(true)}>
//             <PlusIcon className="mr-2 h-4 w-4" /> Upload Document
//           </Button>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>Your Documents</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Tabs value={activeTab} onValueChange={setActiveTab}>
//               <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
//                 {availableTags.map((tag) => (
//                   <TabsTrigger key={tag.id} value={tag.id.toString()}>
//                     {tag.name}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//               <TabsContent value={activeTab} className="mt-6">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>Title</TableHead>
//                       <TableHead>Created At</TableHead>
//                       <TableHead>Actions</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {filteredDocuments.map((doc) => (
//                       <TableRow key={doc.id}>
//                         <TableCell className="font-medium">
//                           <div className="flex items-center">
//                             <FileIcon className="mr-2 h-4 w-4 text-muted-foreground" />
//                             {doc.title}
//                           </div>
//                         </TableCell>
//                         <TableCell>
//                           <div className="flex items-center text-muted-foreground">
//                             <CalendarIcon className="mr-2 h-4 w-4" />
//                             {new Date(doc.createdAt).toLocaleDateString()}
//                           </div>
//                         </TableCell>
//                         <TableCell>
//                           <a
//                             href={doc.fileUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center text-primary hover:underline"
//                           >
//                             View
//                             <ExternalLinkIcon className="ml-1 h-4 w-4" />
//                           </a>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TabsContent>
//             </Tabs>
//           </CardContent>
//         </Card>

//         {showUploadModal && (
//           <UploadDocumentModal
//             onClose={() => {
//               setShowUploadModal(false);
//               fetchDocuments();
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { DocumentWithTag, Tag } from "@/types/types"; // Adjust the import path
import DocumentsPage from "@/components/DocumentsPage";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const userId = Number(session.user.id);

  if (!userId) {
    throw new Error("user Id is out of wack");
  }
  if (isNaN(userId)) {
    throw new Error("user Id is not a number");
  }

  const [documents, tags] = await Promise.all([
    prisma.document.findMany({
      where: { userId },
      include: {
        tag: true, // Ensure the tag is included
      },
    }),
    prisma.tag.findMany(),
  ]);

  const availableTags: Tag[] = [{ id: 0, name: "All" }, ...tags];

  return (
    <DocumentsPage
      documents={documents as DocumentWithTag[]}
      availableTags={availableTags}
    />
  );
}
