"use client";
import { ReminderCard } from "@/components/Dashboard/Reminders/ReminderCard";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ReminderSkeleton from "@/components/Dashboard/Reminders/ReminderSkeleton";

const Reminders = () => {
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
        const res = await fetch(`${BaseURL}/api/reminders`);
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
    if(loading) return <ReminderSkeleton />;
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

export default Reminders;