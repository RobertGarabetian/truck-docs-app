// // app/dashboard/page.tsx
// import { redirect } from "next/navigation";
// import { Tag } from "@/types/types"; // Adjust the import path
// import { currentUser } from "@clerk/nextjs/server";

// export default async function DashboardPage() {
//   const user = await currentUser();

//   if (!user) {
//     redirect("/sign-in");
//   }

//   try {
//     if (user.id) {
//       console.log(user.id);
//       throw Error("user Id is out of wack");
//     }
//   } catch (e) {
//     console.log("The problem is", e);
//   }

//   // const availableTags: Tag[] = [{ id: 0, name: "All" }, ...tags];

//   return (
//     // <DocumentsPage
//     //   documents={documents as DocumentWithTag[]}
//     //   availableTags={availableTags}
//     // />
//   );
// }
