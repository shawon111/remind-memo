import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST() {
    const client = await clerkClient();
    // gwt user ID
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" },
            { status: 401 }
        );
    }

    // get current user
    const user = await currentUser();
    try {

        // check privateMetadata
        const existingMetadata = user?.privateMetadata || {};

        // Prepare updated metadata
        const updatedMetadata = { ...existingMetadata, limit: 15 };

        // Update user metadata
        await client.users.updateUser(userId, {
            privateMetadata: updatedMetadata,
        });

        return NextResponse.json({ message: "Private metadata updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message },
            { status: 500 }
        );
    }
}
