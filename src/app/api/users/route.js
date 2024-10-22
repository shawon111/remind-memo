import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const userData = await req.json();
        const users = await prisma.user.createMany({
            data: userData
        })
        return NextResponse.json(users);
    } catch (error) {
        console.error("Error", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}

export const GET = async () => {
    try{
        const users = await prisma.user.findMany()
        return NextResponse.json(users)
    }catch(error){
        console.log("error", error)
        return NextResponse.json({error: "something went wrong"}).status(500)
    }
}