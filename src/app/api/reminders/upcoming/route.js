import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const GET = async (req) => {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const filter = searchParams.get('filter');
    const today = new Date();
    try {
        const reminders = await prisma.reminder.findMany({
            where: {
                userId: userId,
                event_date: {
                    gte: today,
                },
                ...(filter ? { reminder_type: { contains: filter, mode: 'insensitive' } } : {}),
            },
        });
        return NextResponse.json(reminders);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};