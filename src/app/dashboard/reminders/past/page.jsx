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
    const BaseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const fetchReminders = async () => {
        if (!userId) {
            setLoading(false);
            return <p className="text-red-900">Something went wrong! Please try again.</p>;
        };
        const res = await fetch(`${BaseURL}/api/reminders/past`);
        if (res.ok) {
            const data = await res.json();
            setReminders(data);
        } else {
            setLoading(false);
            console.error("Error fetching reminders", await res.text());
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong. Please reload to Try again"
            })
            return <p className="text-red-900">Something went wrong! Please try again.</p>;
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchReminders();
    }, [userId]);

    // If loading, show skeleton
    // If no reminders found, show message
    if (loading && reminders.length === 0) {
        return <ReminderSkeleton />;
    } else if (!loading && reminders.length === 0) {
        return <p>No reminders found</p>;
    }

    return (
        <div>
            <section>
                <div className="flex items-start justify-start gap-x-5 gap-y-5 flex-wrap">
                    {
                        reminders.length ? reminders.map((reminder, index) => <ReminderCard key={index} reminder={reminder} />) : <></>
                    }
                </div>
            </section>
        </div>
    );
};

export default PastReminders;