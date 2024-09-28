// components/UploadDocumentModal.tsx
"use client";

import React, { useState, useEffect } from "react";
import { UploadButton, UploadDropzone } from "./SourceButtons";

interface Tag {
  id: number;
  name: string;
}

export default function UploadDocumentModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [title, setTitle] = useState("");
  const [selectedTagId, setSelectedTagId] = useState<number | null>(null);
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  // Fetch available tags when the component mounts
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch("/api/tags");
        if (res.ok) {
          const data: Tag[] = await res.json();
          setAvailableTags(data);
        } else {
          console.error("Failed to fetch tags");
          alert("Failed to load tags. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching tags:", error);
        alert("An error occurred while loading tags.");
      }
    };

    fetchTags();
  }, []);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fileUrl || !selectedTagId) {
      alert("Please select a tag and upload a file.");
      return;
    }

    const documentData = {
      title: title,
      fileUrl: fileUrl, // The file URL after the upload is complete
      tagId: selectedTagId, // The selected tag ID
    };

    try {
      const res = await fetch("/api/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(documentData),
      });

      if (res.ok) {
        alert("Document uploaded successfully!");
        onClose();
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Upload failed.");
      }
    } catch (error) {
      console.error("Error submitting document:", error);
      alert("An error occurred during the upload.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Upload Document</h2>
        <form onSubmit={handleSubmit}>
          <UploadButton
            endpoint="uploader"
            onClientUploadComplete={(res) => {
              setFileUrl(res[0].url);
              setTitle(res[0].name);
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
            config={{ appendOnPaste: true, mode: "manual" }}
          />

          {/* Tag Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xl">Tag</label>
            <select
              value={selectedTagId ?? ""}
              onChange={(e) => setSelectedTagId(parseInt(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 bg-white"
            >
              {availableTags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
