import { NextResponse } from "next/server";
import sendEmail from "@/mails/sendEmail";
import prisma from "@/lib/prisma";

export const POST = async (req) => {
    const secretKey = req.headers.get('x-secret-key');
    if (!secretKey) {
        return NextResponse.json({ error: "Not authorized" }, { status: 400 });
    }

    const getRemindersForToday = async () => {
        const today = new Date().setHours(0, 0, 0, 0);
        const result = await prisma.reminder.findMany({
            where: {
                event_date: {
                    gte: today,
                },
                status: "enabled" // Ensure status is "enabled"
            }
        });
        return result;
    };

    try {
        const reminders = await getRemindersForToday();
        let hasNotificationsSent = false;

        for (const reminder of reminders) {
            // Check if notifications are a string and parse if necessary
            const notifications = typeof reminder.notifications === "string" 
                ? JSON.parse(reminder.notifications)
                : reminder.notifications;

            const notificationsToday = notifications.filter((notification) => {
                const notificationDate = new Date(notification.date).setHours(0, 0, 0, 0);
                return (
                    notificationDate === today &&
                    notification.status === "pending" &&
                    notification.notification_type === "email"
                );
            });

            // If no notifications for today, skip to next reminder
            if (notificationsToday.length === 0) {
                continue;
            }

            // Process notifications
            for (const notification of notificationsToday) {
                if (reminder.email) {
                    try {
                        await sendEmail(reminder.email, reminder.reminder_title, notification.message);
                        hasNotificationsSent = true; 
                    } catch (error) {
                        console.error("Error sending email", error);
                    }
                } else {
                    return NextResponse.json({ error: "No email provided" }, { status: 400 });
                }
            }
        }

        if (hasNotificationsSent) {
            return NextResponse.json({ message: "Notification sent successfully" });
        } else {
            return NextResponse.json({ message: "No notifications for today" });
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};
