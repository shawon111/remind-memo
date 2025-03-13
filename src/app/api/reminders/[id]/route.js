import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export const PUT = async (req, { params }) => {
    const { userId } = await auth();
    console.log(userId);
    const { id } = params;
    const data = await req.json();

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!id) {
        return NextResponse.json({ error: "not found" }, { status: 400 });
    }

    try {
        const reminder = await prisma.reminder.update({
            where: { id:id, userId: userId },
            data
        });

        return NextResponse.json(reminder);
    } catch (error) {
        return NextResponse.json({ error: "something went wrong" });
    }
}

// DELETE: Delete a reminder by ID
export const DELETE = async (req, { params }) => {
    const { userId } = auth();
    const { id } = params;

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        await prisma.reminder.delete({
            where: { id: parseInt(id), userId: userId }
        });
        return NextResponse.json({ message: "Reminder deleted successfully" });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};