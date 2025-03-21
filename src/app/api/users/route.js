import { NextResponse } from 'next/server';
import { clerkClient, verifyWebhookSignature } from '@clerk/nextjs/server';

const clerkSigningSecret = process.env.CLERK_LIMIT_SIGNING_SECRET;

export async function POST(req) {
  const signature = req.headers.get('clerk-signature');  
  const body = await req.text();

  // Verify the signature 
  const isValid = verifyWebhookSignature(body, signature, clerkSigningSecret);

  if (!isValid) {
    return NextResponse.json({ message: 'Invalid webhook signature' }, { status: 400 });
  }

  try {
    const event = JSON.parse(body);
    const eventType = event.type;

    // Handle the 'user.created' event
    if (eventType === 'user.created') {
      const userId = event.data.id;

      // Update the user's metadata with the limit field
      await clerkClient.users.updateUser(userId, {
        privateMetadata: { limit: 15 },
      });

      return NextResponse.json({ message: 'User metadata updated successfully!' }, { status: 200 });
    }

    return NextResponse.json({ message: 'Webhook event ignored' }, { status: 200 });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
