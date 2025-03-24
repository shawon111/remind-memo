import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export const GET = async () => {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const today = new Date();
    try {
        const count = await prisma.reminder.count({
            where: { event_date: { gte: today }, userId }
        });
        return NextResponse.json({ count })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}