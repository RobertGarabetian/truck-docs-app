-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_user_id_fkey";

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
