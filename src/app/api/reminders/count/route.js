import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const GET = async () => {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const count = await prisma.reminder.count({
            where: { userId }
        });
        return NextResponse.json({ count })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}