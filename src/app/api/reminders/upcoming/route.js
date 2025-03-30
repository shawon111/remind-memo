import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const GET = async (req) => {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const r_type = searchParams.get('r_type');
    const limitParam = searchParams.get('limit');
    const limit = isNaN(parseInt(limitParam, 10)) ? 10 : parseInt(limitParam, 10);
    const today = new Date();
    try {
        const reminders = await prisma.reminder.findMany({
            where: {
                userId: userId,
                event_date: {
                    gte: today,
                },
                ...(r_type ? { reminder_type: { contains: r_type, mode: 'insensitive' } } : {}),
            },
            include: limitParam ? undefined : { notifications: true },
            orderBy: {
                event_date: "desc",
            },
            take: limit,
        });
        return NextResponse.json(reminders);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};