// app/dashboard/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import UploadDocumentModal from "@/components/UploadDocumentModal";
import { Document } from "@prisma/client"; // Removed Tag

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [documents, setDocuments] = useState<
    (Document & { tags: { id: number; name: string }[] })[]
  >([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [filterTags, setFilterTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<
    { id: number; name: string }[]
  >([]);
  console.log(availableTags);
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
            tags: doc.tags.map((tag) => ({ id: tag.id, name: tag.name })),
          })
        )
      );
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
  console.log(handleFilterChange);

  const filteredDocuments = documents.filter(
    (doc: Document & { tags: { id: number; name: string }[] }) =>
      filterTags.length === 0
        ? true
        : doc.tags.some((tag) => filterTags.includes(tag.name))
  );

  return (
    <main className="p-8 bg-slate-200 h-screen w-full ">
      <div className="flex justify-between items-center mb-6 ">
        <h1 className="text-2xl font-bold text-blue-600">
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
      {/* <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Filter by Tags:</h2>
        <div className="flex flex-wrap">
          {availableTags.map((tag) => (
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
      </div> */}

      {/* Documents Table */}
      <table className="table table-zebra border-2  border-opacity-40 rounded-lg">
        <thead>
          <tr className="text-gray-700 text-2xl">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Tags</th>
            <th className="px-4 py-2">Uploaded At</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map((doc) => (
            <tr key={doc.id} className="border-t text-xl">
              <td className="px-4 py-2 ">{doc.title}</td>
              <td className="px-4 py-2">
                {doc.tags.map((tag) => (
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
