import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// POST: Create a new reminder
export const POST = async (req) => {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const reminderData = await req.json();
        const { event_date, reminder_type, reminder_title, description, how_to_celebrate, is_recurring, status, notifications } = reminderData;
        const finalData = {
            event_date: event_date ? new Date(event_date).toISOString() : null,
            reminder_type,
            reminder_title,
            description,
            how_to_celebrate,
            is_recurring,
            userId,
            status,
            notifications: notifications?.map(notification => ({
                ...notification,
                date: notification.date ? new Date(notification.date).toISOString() : null,
            }))
        }
        const reminder = await prisma.reminder.create({
            data: finalData
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
            where: filter ? { reminder_type: { contains: filter, mode: 'insensitive' } } : {}
        });
        return NextResponse.json(reminders);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};

// PUT: Update a reminder by ID
export const PUT = async (req) => {
    try {
        const { id, ...reminderData } = await req.json();
        const updatedReminder = await prisma.reminder.update({
            where: { id: Number(id) },
            data: reminderData
        });
        return NextResponse.json(updatedReminder);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};

// DELETE: Delete a reminder by ID
export const DELETE = async (req) => {
    try {
        const { id } = await req.json();
        await prisma.reminder.delete({
            where: { id: Number(id) }
        });
        return NextResponse.json({ message: "Reminder deleted successfully" });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};