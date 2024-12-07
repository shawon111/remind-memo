import React from 'react';
import StatCard from './StatCard';

const OverviewStats = () => {
    return (
        <section className="overview-stats">
            <div className="flex items-center justify-between flex-wrap gap-y-3">
                <div className="w-full md:w-[49%] lg:w-[24%]">
                    <StatCard data={{
                        title: "Numbers Of Reminders",
                        count: 10,
                    }} />
                </div>
                <div className="w-full md:w-[49%] lg:w-[24%]">
                    <StatCard data={{
                        title: "Completed Reminders",
                        count: 3
                    }} />
                </div>
                <div className="w-full md:w-[49%] lg:w-[24%]">
                    <StatCard data={{
                        title: "Upcoming Reminders",
                        count: 7
                    }} />
                </div>
                <div className="w-full md:w-[49%] lg:w-[24%]">
                    <StatCard data={{
                        title: "Reminder Limits",
                        count: 10,
                        limit:15
                    }} />
                </div>
            </div>
        </section>
    );
};

export default OverviewStats;