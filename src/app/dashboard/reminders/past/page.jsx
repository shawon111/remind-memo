"use client";
import { ReminderCard } from '@/components/Dashboard/Reminders/ReminderCard';
import ReminderSkeleton from '@/components/Dashboard/Reminders/ReminderSkeleton';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const PastReminders = () => {
    const { toast } = useToast();
    const { userId } = useAuth(); 
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchReminders = async () => {
        if (!userId) return;
        const res = await fetch("http://localhost:3000/api/reminders/past");
        if (res.ok) {
            const data = await res.json();
            setReminders(data);
        } else {
            console.error("Error fetching reminders", await res.text());
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong. Please reload to Try again"
            })
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchReminders();
    }, [userId]);
    if (loading) return <ReminderSkeleton />;

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

export default PastReminders;