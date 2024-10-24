/*
  Warnings:

  - Added the required column `dotComplianceScore` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dotComplianceScore" INTEGER NOT NULL,
ALTER COLUMN "companyName" DROP NOT NULL;
