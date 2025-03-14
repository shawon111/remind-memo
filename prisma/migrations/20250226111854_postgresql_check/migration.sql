-- CreateEnum
CREATE TYPE "ReminderType" AS ENUM ('birthday', 'anniversary', 'event', 'other');

-- CreateEnum
CREATE TYPE "ReminderStatus" AS ENUM ('enabled', 'disabled');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('email', 'sms', 'push');

-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('sent', 'pending', 'failed');

-- CreateEnum
CREATE TYPE "UserLevel" AS ENUM ('free', 'standard', 'premium');

-- CreateEnum
CREATE TYPE "ReminderFrequency" AS ENUM ('yearly', 'monthly', 'weekly', 'single');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userLevel" "UserLevel" NOT NULL DEFAULT 'free',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reminder" (
    "id" TEXT NOT NULL,
    "reminderType" "ReminderType" NOT NULL,
    "reminderTitle" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "howToCelebrate" TEXT NOT NULL DEFAULT '',
    "eventDate" TIMESTAMP(3) NOT NULL,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,
    "frequency" "ReminderFrequency" NOT NULL DEFAULT 'yearly',
    "status" "ReminderStatus" NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reminder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "reminderId" TEXT NOT NULL,
    "notificationType" "NotificationType" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL DEFAULT '',
    "status" "NotificationStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Reminder" ADD CONSTRAINT "Reminder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_reminderId_fkey" FOREIGN KEY ("reminderId") REFERENCES "Reminder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
