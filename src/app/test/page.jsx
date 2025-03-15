import StackOverflowTipsEmail from '@/components/Email/EmailTemplate';
import React from 'react';

const Test = () => {
    const reminder = {
        id: "550e8400-e29b-41d4-a716-446655440000",
        reminder_type: "BIRTHDAY",
        reminder_title: "John's Birthday",
        description: "John's 30th birthday celebration",
        how_to_celebrate: "Buy a cake and arrange a surprise party",
        event_date: new Date("2025-06-15T00:00:00.000Z"),
        is_recurring: true,
        frequency: "yearly",
        status: "ACTIVE",
        userId: "12345",
        email: "user@example.com",
    }
    const notification = {
        date: new Date("2025-06-14T12:00:00.000Z"),
        type: "email",
        message: "Reminder: John's birthday is very soon!",
        status: "pending"
    }
    return (
        <div>
            <StackOverflowTipsEmail reminder={reminder} notification={notification} />
        </div>
    );
};

export default Test;