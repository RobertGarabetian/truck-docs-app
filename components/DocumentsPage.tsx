// // components/DashboardContent.tsx
"use client";

import { useState } from "react";
import UploadDocumentModal from "@/components/UploadDocumentModal";
import {
  PlusIcon,
  FileIcon,
  CalendarIcon,
  ExternalLinkIcon,
  ChartNoAxesGantt,
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
import { Document, Tag } from "@/types/types"; // Adjust the import path accordingly
import { useRouter } from "next/navigation";
import ManageTagModal from "./ManageTagModal";

interface DashboardContentProps {
  documents: Document[];
  tags: Tag[];
}

export default function DocumentsPage({
  documents,
  tags,
}: DashboardContentProps) {
  const [activeTab, setActiveTab] = useState<string>("0");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const router = useRouter(); // Initialize router

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
          <div className="flex flex-row space-x-2">
            <Button onClick={() => setShowTagModal(true)}>
              <ChartNoAxesGantt className="mr-2 h-4 w-4" /> Manage Tags
            </Button>
            <Button onClick={() => setShowUploadModal(true)}>
              <PlusIcon className="mr-2 h-4 w-4" /> Upload Document
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
                {tags.map((tag) => (
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
                            Edit
                            <ExternalLinkIcon className="ml-1 h-4 w-4" />
                          </a>
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
      </div>
      {showUploadModal && (
        <UploadDocumentModal
          onClose={() => {
            setShowUploadModal(false);
          }}
          onUploadSuccess={() => {
            setShowUploadModal(false);
            router.refresh(); // Refresh data after successful upload
          }}
          tags={tags}
        />
      )}
      {showTagModal && (
        <ManageTagModal
          onClose={() => {
            setShowTagModal(false);
          }}
          onUploadSuccess={() => {
            setShowTagModal(false);
            router.refresh(); // Refresh data after successful upload
          }}
          tags={tags}
        />
      )}
    </div>
  );
}
