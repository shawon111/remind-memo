import React from 'react';
import StatCard from './StatCard';
import { cookies } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';

const OverviewStats = async() => {
    const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const cookieStore = cookies();
    const user = await currentUser();

    // get user limit and available reminder
    const { limit, availableReminder } = user?.privateMetadata;

    // get total reminders
    const totalReminders = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/reminders/count`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: cookieStore.toString()
                },
                cache: 'no-store'
            });
            const data = await response.json();
            return data.count;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }

    // get total sent notifications
    const totalSentNotifications = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/notifications/sent-count`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: cookieStore.toString()
                },
                cache: 'no-store'
            });
            const data = await response.json();
            return data.count;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }

    // get total upcoming reminders
    const totalUpcomingReminders = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/reminders/upcoming/count`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: cookieStore.toString()
                },
                cache: 'no-store'
            });
            const data = await response.json();
            return data.count;
        } catch (error) {
            console.log(error);
            return 0;
        }
    }
    return (
        <section className="overview-stats">
            <div className="flex items-center justify-between flex-wrap gap-y-3">
                <div className="w-full md:w-[49%] lg:w-[24%]">
                    <StatCard data={{
                        title: "Numbers Of Reminders",
                        count: totalReminders(),
                    }} />
                </div>
                <div className="w-full md:w-[49%] lg:w-[24%]">
                    <StatCard data={{
                        title: "Sent Notifications",
                        count: totalSentNotifications()
                    }} />
                </div>
                <div className="w-full md:w-[49%] lg:w-[24%]">
                    <StatCard data={{
                        title: "Upcoming Reminders",
                        count: totalUpcomingReminders()
                    }} />
                </div>
                <div className="w-full md:w-[49%] lg:w-[24%]">
                    <StatCard data={{
                        title: "Reminder Limits",
                        count: availableReminder,
                        limit: limit
                    }} />
                </div>
            </div>
        </section>
    );
};

export default OverviewStats;