// // components/ManageTagModal.tsx
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
// export default function UploadTagModal({
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
"use client";

import React, { useState, useEffect } from "react";
import { Pencil, Save, X } from "lucide-react";

interface Tag {
  id: number;
  name: string;
}

interface UploadTagModalProps {
  onClose: () => void;
  onUploadSuccess: () => void;
  tags: Tag[];
}

export default function UploadTagModal({
  onClose,
  onUploadSuccess,
  tags,
}: UploadTagModalProps) {
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [editingTagId, setEditingTagId] = useState<number | null>(null);
  const [newTagName, setNewTagName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch available tags when the component mounts
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const data: Tag[] = tags;
        setAvailableTags(data);
      } catch (error) {
        console.error("Error fetching tags:", error);
        alert("An error occurred while loading tags.");
      }
    };

    fetchTags();
  }, [tags]);

  const handleEditClick = (tag: Tag) => {
    setEditingTagId(tag.id);
    setNewTagName(tag.name);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTagName(e.target.value);
  };

  const handleSaveClick = async (tagId: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/tags/${tagId}`, {
        method: "PUT", // or "PATCH"
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newTagName }),
      });

      if (res.ok) {
        // Update the tag in the local state
        setAvailableTags((prevTags) =>
          prevTags.map((tag) =>
            tag.id === tagId ? { ...tag, name: newTagName } : tag
          )
        );
        setEditingTagId(null);
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Update failed.");
      }
    } catch (error) {
      console.error("Error updating tag:", error);
      alert("An error occurred while updating the tag.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    setEditingTagId(null);
    setNewTagName("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-screen w-screen">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Manage Tags</h2>
        <div>
          {/* Tag Management */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 text-xl">Tags</label>
            <div className="w-full px-3 py-2 flex flex-col space-y-1">
              {availableTags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex flex-row w-full border border-slate-500 p-2 rounded justify-between items-center"
                >
                  {editingTagId === tag.id ? (
                    <>
                      <input
                        type="text"
                        value={newTagName}
                        onChange={handleNameChange}
                        className="border rounded p-1 flex-grow mr-2"
                        disabled={isLoading}
                      />
                      <button
                        onClick={() => handleSaveClick(tag.id)}
                        disabled={isLoading}
                      >
                        <Save />
                      </button>
                      <button onClick={handleCancelClick} disabled={isLoading}>
                        <X />
                      </button>
                    </>
                  ) : (
                    <>
                      <div>{tag.name}</div>
                      <button onClick={() => handleEditClick(tag)}>
                        <Pencil />
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
