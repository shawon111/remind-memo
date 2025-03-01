import prisma from "@/lib/prisma"; 
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const userData = await req.json(); 
        const user = await prisma.user.create({
            data: userData
        });
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};

export const GET = async () => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};
