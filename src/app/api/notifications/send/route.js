import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import sendEmail from "@/utils/sendEmail";

export const POST = async (req) => {
    const secretKey = req.headers.get('x-secret-key');
    if (!secretKey || secretKey !== process.env.CRON_SECRET_KEY) {
        return NextResponse.json({ error: "Not authorized" }, { status: 400 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Set time to start of the day

    try {
        // Fetch Notifications for Today
        const notificationsToday = await prisma.notification.findMany({
            where: {
                date: {
                    gte: today,
                    lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
                },
                status: "pending",
                notification_type: "email",
                reminder: {
                    status: "enabled",  // Only include notifications with enabled reminders
                },
            },
            include: {
                reminder: true,
            }
        });

        let hasNotificationsSent = false;

        // Process each notification
        for (const notification of notificationsToday) {
            const reminder = notification.reminder;

            if (!reminder || !reminder.email) {
                console.log("No associated reminder or reminder has no email.");
                continue;
            }

            // Send the email
            try {
                const mailStatus = await sendEmail(reminder, notification);
                if (mailStatus) {
                    hasNotificationsSent = true;
                    // Update notification status to "sent"
                    await prisma.notification.update({
                        where: { id: notification.id },
                        data: { status: "sent" }
                    });
                }
                console.log("Notification sent and updated successfully.");
            } catch (error) {
                console.log("Error sending email", error)
            }
        }

        if (hasNotificationsSent) {
            return NextResponse.json({ message: "Notifications sent successfully" });
        } else {
            return NextResponse.json({ message: "No notifications for today" });
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ errorMessage: "Something went wrong", error: error }, { status: 500 });
    }
};
