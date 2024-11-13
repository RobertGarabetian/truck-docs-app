// // components/UploadDocumentModal.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { Pencil } from "lucide-react";
// interface Tag {
//   id: number;
//   name: string;
// }
// interface UploadTagModalProps {
//   onClose: () => void;
//   onUploadSuccess: () => void;
//   tags: Tag[];
// }
// export default function EditDocumentModal({
//   onClose,
//   onUploadSuccess,
//   tags,
// }: UploadTagModalProps) {
//   const [selectedTagId, setSelectedTagId] = useState<number | null>(null);
//   const [availableTags, setAvailableTags] = useState<Tag[]>([]);

//   // Fetch available tags when the component mounts
//   useEffect(() => {
//     const fetchTags = async () => {
//       try {
//         const data: Tag[] = tags;
//         setAvailableTags(data);

//         if (data.length > 0) {
//           setSelectedTagId(data[0].id);
//         }
//       } catch (error) {
//         console.error("Error fetching tags:", error);
//         alert("An error occurred while loading tags.");
//       }
//     };

//     fetchTags();
//   }, [tags]);

//   const handleSubmit = async (fileUrl: string, title: string) => {
//     const documentData = {
//       title: title,
//       fileUrl: fileUrl, // The file URL after the upload is complete
//       tagId: selectedTagId, // The selected tag ID
//     };

//     try {
//       const res = await fetch("/api/documents", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(documentData),
//       });

//       if (res.ok) {
//         console.log("Document uploaded successfully!");
//         onUploadSuccess();
//         onClose();
//       } else {
//         const errorData = await res.json();
//         alert(errorData.error || "Upload failed.");
//       }
//     } catch (error) {
//       console.error("DB related error when submitting document:", error);
//       alert("An error occurred during the upload.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-screen w-screen">
//       <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Manage Tags</h2>
//         <div>
//           {/* Tag Selection */}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2 text-xl">Tags</label>
//             <div className="w-full px-3 py-2 flex flex-col space-y-1">
//               {availableTags.map((tag) => (
//                 <div
//                   key={tag.id}
//                   className="flex flex-row w-full border border-slate-500 p-2 rounded justify-between"
//                 >
//                   <div>{tag.name}</div>
//                   <button>
//                     <Pencil />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 border rounded hover:bg-gray-100"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/EditDocumentModal.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Document, Tag } from "@/types/types";

interface EditDocumentModalProps {
  onClose: () => void;
  onEditSuccess: () => void;
  document: Document;
  tags: Tag[];
}

export default function EditDocumentModal({
  onClose,
  onEditSuccess,
  document,
  tags,
}: EditDocumentModalProps) {
  const [title, setTitle] = useState<string>(document.title);
  const [selectedTagId, setSelectedTagId] = useState<number>(document.tagId);
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Set available tags when the component mounts or when tags prop changes
  useEffect(() => {
    setAvailableTags(tags);
  }, [tags]);

  // Handle changes to the title input
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handle changes to the tag selection
  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTagId(parseInt(e.target.value));
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Input validation
    if (!title.trim()) {
      alert("Title cannot be empty.");
      return;
    }

    if (!selectedTagId) {
      alert("Please select a tag.");
      return;
    }

    setIsLoading(true); // Start loading

    const documentData = {
      title,
      tagId: selectedTagId,
    };

    try {
      const res = await fetch(`/api/documents/${document.id}`, {
        method: "PUT", // Use "PUT" or "PATCH" based on your API design
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(documentData),
      });

      if (res.ok) {
        console.log("Document updated successfully!");
        onEditSuccess(); // Callback to parent component to refresh data or state
        onClose(); // Close the modal
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Update failed.");
      }
    } catch (error) {
      console.error("Error updating document:", error);
      alert("An error occurred during the update.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-screen w-screen">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Document</h2>
        <div>
          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xl">Title</label>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-3 py-2 border rounded"
              disabled={isLoading} // Disable input when loading
            />
          </div>

          {/* Tag Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xl">Tag</label>
            <select
              value={selectedTagId}
              onChange={handleTagChange}
              className="w-full px-3 py-2 border rounded"
              disabled={isLoading} // Disable select when loading
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
              disabled={isLoading} // Disable button when loading
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? "Saving..." : "Save"} {/* Show saving indicator */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
