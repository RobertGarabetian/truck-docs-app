// app/dashboard/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import UploadDocumentModal from "@/components/UploadDocumentModal";
import { Document, Tag } from "@prisma/client";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [documents, setDocuments] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);

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
      setDocuments(
        data.map(
          (doc: Document & { tags: { id: number; name: string }[] }) => ({
            ...doc,
            tags: doc.tags.map((tag) => ({ name: tag.name })),
          })
        )
      );
    } else {
    }
  };

  const fetchTags = async () => {
    const res = await fetch("/api/tags");
    if (res.ok) {
      const data = await res.json();
      setAvailableTags(data);
    }
  };

  const handleFilterChange = (tag: string) => {
    setFilterTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredDocuments = documents.filter((doc: any) =>
    filterTags.length === 0
      ? true
      : doc.tags.some((tag: any) => filterTags.includes(tag.name))
  );

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Welcome to your Dashboard,{" "}
          {session?.user?.name || session?.user?.email}!
        </h1>
        <button
          onClick={() => setShowUploadModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Upload Document
        </button>
      </div>

      {/* Tag Filters */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Filter by Tags:</h2>
        <div className="flex flex-wrap">
          {availableTags.map((tag: any) => (
            <button
              key={tag.id}
              onClick={() => handleFilterChange(tag.name)}
              className={`mr-2 mb-2 px-3 py-1 rounded ${
                filterTags.includes(tag.name)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      {/* Documents Table */}
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Tags</th>
            <th className="px-4 py-2">Uploaded At</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map((doc: any) => (
            <tr key={doc.id} className="border-t">
              <td className="px-4 py-2">{doc.title}</td>
              <td className="px-4 py-2">
                {doc.tags.map((tag: { id: number; name: string }) => (
                  <span
                    key={tag.id}
                    className="inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-1"
                  >
                    {tag.name}
                  </span>
                ))}
              </td>
              <td className="px-4 py-2">
                {new Date(doc.createdAt).toLocaleString()}
              </td>
              <td className="px-4 py-2">
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUploadModal && (
        <UploadDocumentModal
          onClose={() => {
            setShowUploadModal(false);
            fetchDocuments(); // Refresh documents after upload
          }}
        />
      )}
    </main>
  );
}
