/*
  Warnings:

  - You are about to drop the column `eventDate` on the `Reminder` table. All the data in the column will be lost.
  - You are about to drop the column `howToCelebrate` on the `Reminder` table. All the data in the column will be lost.
  - You are about to drop the column `isRecurring` on the `Reminder` table. All the data in the column will be lost.
  - You are about to drop the column `reminderTitle` on the `Reminder` table. All the data in the column will be lost.
  - You are about to drop the column `reminderType` on the `Reminder` table. All the data in the column will be lost.
  - Added the required column `event_date` to the `Reminder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reminder_title` to the `Reminder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reminder_type` to the `Reminder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reminder" DROP COLUMN "eventDate",
DROP COLUMN "howToCelebrate",
DROP COLUMN "isRecurring",
DROP COLUMN "reminderTitle",
DROP COLUMN "reminderType",
ADD COLUMN     "event_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "how_to_celebrate" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "is_recurring" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reminder_title" TEXT NOT NULL,
ADD COLUMN     "reminder_type" "ReminderType" NOT NULL;
