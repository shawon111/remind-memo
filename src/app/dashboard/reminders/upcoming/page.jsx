"use client";
import { ReminderCard } from '@/components/Dashboard/Reminders/ReminderCard';
import ReminderSkeleton from '@/components/Dashboard/Reminders/ReminderSkeleton';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

const UpcomingReminders = () => {
    const { toast } = useToast();
    const { userId } = useAuth();
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchReminders = async () => {
        if (!userId) {
            setLoading(false);
            return <p className="text-red-900">Something went wrong! Please try again.</p>;
        };
        const res = await fetch("http://localhost:3000/api/reminders/upcoming");
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
    if (loading) return <ReminderSkeleton />;
    return (
        <div>
            <section>
                <div className="flex items-start justify-start gap-x-5 gap-y-5 flex-wrap">
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