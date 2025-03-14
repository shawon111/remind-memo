/*
  Warnings:

  - You are about to drop the column `notificationType` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `notification_type` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "notificationType",
ADD COLUMN     "notification_type" "NotificationType" NOT NULL;
