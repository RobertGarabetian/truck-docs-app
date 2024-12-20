export interface Tag {
  id: number;
  name: string;
  user_id: string | null;
}

export interface Document {
  id: number;
  title: string;
  fileUrl: string;
  user_id: string;
  createdAt: Date;
  updatedAt: Date;
  tagId: number ;
  tag: Tag ;
}

export interface User {
  user_id: string ;
  firstName: string | null;
  lastName: string | null;
  companyName: string | undefined | null;
  dotComplianceScore: number;
  email: string | null;
}
