/*
  Warnings:

  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_reminderId_fkey";

-- AlterTable
ALTER TABLE "Reminder" ADD COLUMN     "notifications" JSONB NOT NULL DEFAULT '[]';

-- DropTable
DROP TABLE "Notification";
