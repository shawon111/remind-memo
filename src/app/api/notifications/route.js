import { NextResponse } from "next/server";
export const GET = async (req) => {
    NextResponse.json({ message: "Hello World" });
}