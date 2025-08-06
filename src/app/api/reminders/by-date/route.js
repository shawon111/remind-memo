import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// get reminder by date
export const GET = async(req)=> {
 try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        const { searchParams } = new URL(req.url);
        const date = searchParams.get('date');
        if (!date) {
            return NextResponse.json({ error: "Date is required" }, { status: 400 });
        }
        const reminders = await prisma.reminder.findMany({
            where: {
                userId,
                event_date: new Date(date)
            },
            include: { notifications: true }
        });
        return NextResponse.json(reminders);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}