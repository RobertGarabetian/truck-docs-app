/*
  Warnings:

  - You are about to drop the `DocumentTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tagId` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DocumentTag" DROP CONSTRAINT "DocumentTag_documentId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentTag" DROP CONSTRAINT "DocumentTag_tagId_fkey";

-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "tagId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "DocumentTag";

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
