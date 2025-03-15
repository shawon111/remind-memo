import prisma from "@/lib/prisma";

export const POST = async (req) => {
    const secretKey = req.headers.get('x-secret-key');
    if (!secretKey) {
        return NextResponse.json({ error: "Not authorized" }, { status: 400 });
    }
    if (secretKey !== process.env.CRON_SECRET_KEY) {
        return NextResponse.json({ error: "Not authorized" }, { status: 400 });
    }

    const findReminders = async () => {
        const result = await prisma.reminder.findMany({
            where: {
                is_recurring: true,
            },
        });
        return result;
    }
    try {
        const reminders = await findReminders();
        if (reminders.length === 0) {
            return NextResponse.json({ message: "No recurring reminders found" });
        }
        for (const reminder of reminders) {
            const reminderDate = new Date(reminder.event_date);
            reminderDate.setFullYear(reminderDate.getFullYear() + 1);
            const allNotifications = reminder.notifications || [];
            if (allNotifications.length > 0) {
                allNotifications.forEach((notification) => {
                    const newNotifDate = new Date(notification.date);
                    newNotifDate.setFullYear(newNotifDate.getFullYear() + 1);
                    notification.date = newNotifDate;
                });
            }

            await prisma.reminder.update({
                where: { id: reminder.id },
                data: {
                    event_date: reminderDate,
                    notifications: allNotifications,
                }
            });
        }
        return NextResponse.json({ message: "Recurring reminders updated" });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};