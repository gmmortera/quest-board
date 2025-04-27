/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Quest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quest" DROP COLUMN "updateAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3);
