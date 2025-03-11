import { headers } from "next/headers";
import { Webhook } from "svix"; 
import prisma from "@/lib/prisma"; 
import { NextResponse } from "next/server";

const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET; 

export const POST = async (req) => {
    const headersList = headers();
    const svixId = headersList.get("svix-id");
    const svixTimestamp = headersList.get("svix-timestamp");
    const svixSignature = headersList.get("svix-signature");

    if (!svixId || !svixTimestamp || !svixSignature) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        // Verify Clerk Webhook Signature
        const webhook = new Webhook(CLERK_WEBHOOK_SECRET);
        const payload = await req.text();
        const evt = webhook.verify(payload, {
            "svix-id": svixId,
            "svix-timestamp": svixTimestamp,
            "svix-signature": svixSignature,
        });

        if (evt.type !== "user.created") {
            return NextResponse.json({ message: "Not a user.created event" }, { status: 400 });
        }

        const { id, email_addresses, first_name, last_name } = evt.data;

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { clerkId: id },
        });

        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 200 });
        }

        // Save to database
        const newUser = await prisma.user.create({
            data: {
                clerkId: id,
                email: email_addresses[0].email_address,
                firstName: first_name || "",
                lastName: last_name || "",
                role: "user",
            },
        });

        return NextResponse.json({ message: "User created", user: newUser }, { status: 201 });

    } catch (error) {
        console.error("Error processing webhook:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

export const GET = async () => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
};
