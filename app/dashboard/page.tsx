// app/dashboard/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import UploadDocumentModal from "@/components/UploadDocumentModal";
import { Document, Tag } from "@prisma/client"; // Removed Tag

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
      <div role="tablist" className="tabs tabs-lifted">
        {availableTags.map((tag: any, index: number) => (
          <React.Fragment key={tag.id}>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab "
              aria-label={tag.name}
              defaultChecked={index === 0}
            />
            <div
              role="tabpanel"
              className="tab-content bg-transparent border-base-300 rounded-box p-6"
            >
              <table className="table   border-opacity-40 rounded-lg">
                <tbody>
                  {filteredDocuments.map((doc: Document) => (
                    <tr key={doc.id} className="border-t text-xl">
                      <td className="px-4 py-2 ">{doc.title}</td>

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
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Documents Table */}

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
