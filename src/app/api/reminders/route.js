import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";

// POST: Create a new reminder
export const POST = async (req) => {
    const client = await clerkClient();
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const user = await currentUser();
        const reminderData = await req.json();
        const { event_date, reminder_type, reminder_title, description, how_to_celebrate, is_recurring, status, notifications } = reminderData;
        const finalData = {
            event_date: new Date(event_date),
            reminder_type,
            reminder_title,
            description,
            how_to_celebrate,
            is_recurring,
            userId,
            email: user?.emailAddresses[0]?.emailAddress,
            status,
            notifications: {
                create: notifications?.map(notification => ({
                    notification_type: notification.notification_type,
                    date: new Date(notification.date),
                    message: notification.message || "",
                    status: notification.status,
                    userId,
                })) || [],
            },
        }
        const reminder = await prisma.reminder.create({
            data: finalData,
            include: { notifications: true }
        });

        // Decrease availableReminder by 1
        await client.users.updateUser(userId, {
            privateMetadata: {
                ...user.privateMetadata,
                availableReminder: Math.max(
                    (user.privateMetadata?.availableReminder ?? 15) - 1,
                    0
                ),
            },
        });

        return NextResponse.json(reminder);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};

// GET: Retrieve all reminders
export const GET = async (req) => {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const filter = searchParams.get('filter');
    try {
        const reminders = await prisma.reminder.findMany({
            where: {
                userId: userId,
                ...(filter ? { reminder_type: { contains: filter, mode: 'insensitive' } } : {})
            },
            include: { notifications: true }
        });
        return NextResponse.json(reminders);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};