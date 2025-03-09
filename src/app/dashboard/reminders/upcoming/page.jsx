import { ReminderCard } from '@/components/Dashboard/Reminders/ReminderCard';
import React from 'react';

const UpcomingReminders = async() => {
    const res = await fetch(`http://localhost:3000/api/reminders/upcoming`, { cache: "no-store" });
    const reminders = await res.json();
    console.log(reminders)
    return (
        <div>
            <section>
                <div className="flex items-start justify-between gap-y-5 flex-wrap">
                    {
                        reminders.length ? reminders.map((reminder, index) => <ReminderCard key={index} reminder={reminder} />) : <div>
                            <p>No reminders found</p>
                        </div>
                    }
                </div>
            </section>
        </div>
    );
};

export default UpcomingReminders;