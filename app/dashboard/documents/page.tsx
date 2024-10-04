// "use client";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import UploadDocumentModal from "@/components/UploadDocumentModal";
// import { PlusIcon, File, CalendarIcon, ExternalLinkIcon } from "lucide-react";

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
//   const [activeTab, setActiveTab] = useState<number>(0);

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
//     activeTab === 0 ? true : doc.tag.id === activeTab
//   );

//   return (
//     <main className="min-h-screen bg-gray-100">
//       <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-3xl font-bold text-gray-900">
//               Document Dashboard
//             </h1>
//             <button
//               onClick={() => setShowUploadModal(true)}
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150 ease-in-out flex items-center"
//             >
//               <PlusIcon className="w-5 h-5 mr-2" />
//               Upload Document
//             </button>
//           </div>

//           <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//             <div className="border-b border-gray-200">
//               <nav className="-mb-px flex">
//                 {availableTags.map((tag) => (
//                   <button
//                     key={tag.id}
//                     onClick={() => setActiveTab(tag.id)}
//                     className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                       activeTab === tag.id
//                         ? "border-blue-500 text-blue-600"
//                         : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                     } mx-3 focus:outline-none transition duration-150 ease-in-out`}
//                   >
//                     {tag.name}
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             <ul className="divide-y divide-gray-200">
//               {filteredDocuments.map((doc) => (
//                 <li
//                   key={doc.id}
//                   className="px-6 py-4 flex items-center justify-between hover:bg-gray-50"
//                 >
//                   <div className="flex items-center">
//                     <File className="w-6 h-6 text-gray-400 mr-3" />
//                     <div>
//                       <h3 className="text-lg font-medium text-gray-900">
//                         {doc.title}
//                       </h3>
//                       <div className="flex items-center text-sm text-gray-500 mt-1">
//                         <CalendarIcon className="w-4 h-4 mr-1" />
//                         {new Date(doc.createdAt).toLocaleDateString()}
//                       </div>
//                     </div>
//                   </div>
//                   <a
//                     href={doc.fileUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:text-blue-800 flex items-center"
//                   >
//                     View
//                     <ExternalLinkIcon className="w-4 h-4 ml-1" />
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {showUploadModal && (
//         <UploadDocumentModal
//           onClose={() => {
//             setShowUploadModal(false);
//             fetchDocuments();
//           }}
//         />
//       )}
//     </main>
//   );
// }
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import UploadDocumentModal from "@/components/UploadDocumentModal";
import {
  PlusIcon,
  FileIcon,
  CalendarIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DocumentWithTag {
  id: number;
  title: string;
  fileUrl: string;
  tag: {
    id: number;
    name: string;
  };
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [documents, setDocuments] = useState<DocumentWithTag[]>([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [availableTags, setAvailableTags] = useState<
    { id: number; name: string }[]
  >([]);
  const [activeTab, setActiveTab] = useState<string>("0");

  useEffect(() => {
    if (!session && status !== "loading") {
      router.push("/login");
    } else if (session) {
      fetchDocuments();
      fetchTags();
    }
  }, [session, status, router]);

  const fetchDocuments = async () => {
    const res = await fetch("/api/documents");
    if (res.ok) {
      const data = await res.json();
      setDocuments(data);
    }
  };

  const fetchTags = async () => {
    const res = await fetch("/api/tags");
    if (res.ok) {
      const data = await res.json();
      setAvailableTags([{ id: 0, name: "All" }, ...data]);
    }
  };

  const filteredDocuments = documents.filter((doc) =>
    activeTab === "0" ? true : doc.tag.id.toString() === activeTab
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Document Dashboard
          </h1>
          <Button onClick={() => setShowUploadModal(true)}>
            <PlusIcon className="mr-2 h-4 w-4" /> Upload Document
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
                {availableTags.map((tag) => (
                  <TabsTrigger key={tag.id} value={tag.id.toString()}>
                    {tag.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value={activeTab} className="mt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Created At</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDocuments.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <FileIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                            {doc.title}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-muted-foreground">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {new Date(doc.createdAt).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-primary hover:underline"
                          >
                            View
                            <ExternalLinkIcon className="ml-1 h-4 w-4" />
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {showUploadModal && (
          <UploadDocumentModal
            onClose={() => {
              setShowUploadModal(false);
              fetchDocuments();
            }}
          />
        )}
      </div>
    </div>
  );
}
