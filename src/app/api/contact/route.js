import contactEmail from "@/utils/contactEmail";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const result = await contactEmail(name, email, message);
        if (result.error) { 
            return NextResponse.json({ error: result.error }, { status: 500 });
        }
        return NextResponse.json({ success: "Message sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error in contact route:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}