import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// analytics of a user based on their reminders
export const GET = async (req) => {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const analyticsData = await prisma.$transaction(async (tx) => {
            // get reminder count for the current year by user by every month
            const reminders = await tx.reminder.findMany({
                where: {
                    userId,
                    event_date: {
                        gte: new Date(new Date().getFullYear(), 0, 1),
                        lte: new Date(new Date().getFullYear(), 11, 31)
                    }
                },
                select: {
                    event_date: true
                }
            })

            // group by month
            const countsByMonth = Array(12).fill(0)
            for (const reminder of reminders) {
                const month = reminder.event_date.getMonth() // 0 = Jan, 11 = Dec
                countsByMonth[month]++
            }

            // get the types of reminders by user and count them by type and create an array of objects
            const reminderTypes = await tx.reminder.groupBy({
                by: ['reminder_type'],
                _count: true,
                where: {
                    userId
                }
            });
            return {
                countsByMonth,
                reminderTypes
            }
        })

        return NextResponse.json(analyticsData);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}