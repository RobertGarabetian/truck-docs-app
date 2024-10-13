// types.ts or wherever you define your types

export interface Tag {
    id: number;
    name: string;
  }
  
export interface DocumentWithTag {
  id: number;
  title: string;
  fileUrl: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  tagId: number;
  tag: Tag; // Ensure this property is included
}
