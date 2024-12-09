import { ReminderCard } from "@/components/Dashboard/Reminders/ReminderCard";

const page = () => {
    const reminders = [
        {
            title: "Joe's birthday",
            description: "This is Joe's 24th birthday",
            reminder_type: "birthday",
            how_to_celebrate: "Wish him with phone call",
            event_date: "12-05-2025",
            is_recurring: "true",
            is_celebrated: "false",
            frequency: "yearly",
            status: "pending",
            notifications: [
                {
                    date: "01-05-2025",
                    status: "sent"
                },
                {
                    date: "07-05-2025",
                    status: "pending"
                },
                {
                    date: "11-05-2025",
                    status: "pending"
                },
            ]
        },
        {
            title: "Our Marriage anniversary",
            description: "It's our 3rd marriage anniversary",
            reminder_type: "anniversary",
            how_to_celebrate: "Go to a candle light dinner",
            event_date: "30-07-2025",
            is_recurring: "true",
            is_celebrated: "false",
            frequency: "yearly",
            status: "pending",
            notifications: [
                {
                    date: "01-07-2025",
                    status: "pending"
                },
                {
                    date: "18-07-2025",
                    status: "pending"
                },
                {
                    date: "26-07-2025",
                    status: "pending"
                },
            ]
        },
        {
            title: "Party at Morgan's house",
            description: "Morgan arranged a party for friends to celebrate his promotion",
            reminder_type: "event",
            how_to_celebrate: "Attend the party",
            event_date: "05-08-2025",
            is_recurring: "false",
            is_celebrated: "false",
            frequency: null,
            status: "pending",
            notifications: [
                {
                    date: "01-08-2025",
                    status: "pending"
                },
                {
                    date: "04-08-2025",
                    status: "pending"
                },
            ]
        },
    ]
    return (
        <div>
            <section>
                <div className="flex items-start justify-between gap-y-3 flex-wrap">
                    {
                        reminders ? reminders.map((reminder,index)=> <ReminderCard key={index} reminder={reminder} />) : <div></div>
                    }
                </div>
            </section>
        </div>
    );
};

export default page;