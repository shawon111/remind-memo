import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST: Create a new reminder
export const POST = async (req) => {
    try {
        const reminderData = await req.json();
        const reminder = await prisma.reminder.create({
            data: {...reminderData, userId: 1}
        });
        return NextResponse.json(reminder);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};

// GET: Retrieve all reminders
export const GET = async () => {
    try {
        const reminders = await prisma.reminder.findMany();
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