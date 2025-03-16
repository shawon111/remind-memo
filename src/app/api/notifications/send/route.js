import { NextResponse } from "next/server";
import sendEmail from "@/mails/sendEmail";
import prisma from "@/lib/prisma";

export const POST = async (req) => {
    const secretKey = req.headers.get('x-secret-key');
    if (!secretKey) {
        return NextResponse.json({ error: "Not authorized" }, { status: 400 });
    }

    if(secretKey !== process.env.CRON_SECRET_KEY) {
        return NextResponse.json({ error: "Not authorized" }, { status: 400 });
    }

    const getRemindersForToday = async () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
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
            const notifications = reminder.notifications || [];

            const notificationsToday = notifications.filter((notification) => {
                const notificationDate = new Date(notification.date);
                notificationDate.setHours(0, 0, 0, 0);
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
                        await sendEmail( reminder, notification);
                        hasNotificationsSent = true; 
                        // Update notification status to "sent" in the database
                        notifications.forEach((notif) => {
                            if (notif.date === notification.date && notif.notification_type === "email") {
                                notif.status = "sent";
                            }
                        });
                        await prisma.reminder.update({
                            where: { id: reminder.id },
                            data: {
                                notifications: notifications
                            }
                        });
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
