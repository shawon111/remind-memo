import CelebratedEvents from "@/components/Dashboard/Analytics/CelebratedEvents";
import MissedReminders from "@/components/Dashboard/Analytics/MissedReminders";
import OneYearReminderChart from "@/components/Dashboard/Analytics/OneYearReminderChart";
import ReminderTypesChart from "@/components/Dashboard/Analytics/ReminderTypesChart";
import OverviewStats from "@/components/Dashboard/Overview/OverviewStats";
import next from "next";
import { cookies } from "next/headers";

const Analytics = async() => {
    const cookieStore = await cookies()
    const BaseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${BaseURL}/api/analytics`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
            'Cookie': cookieStore.toString()
        }
    }, {next: { revalidate: 3600 }});
    const analyticsData = await response.json();
    return (
        <div>
            <OverviewStats />
            <section>
                <div className="flex items-start justify-between flex-wrap pt-10 gap-y-3">
                    <div className="w-full lg:w-[60%]">
                        <OneYearReminderChart data={analyticsData.countsByMonth} />
                    </div>
                    <div className="w-full lg:w-[38%]">
                        <ReminderTypesChart data={analyticsData.reminderTypes} />
                    </div>
                </div>
            </section>
            {/* <section>
                <div className="flex items-start justify-between flex-wrap pt-10 gap-y-3">
                    <div className="w-full lg:w-[49%]">
                        <CelebratedEvents />
                    </div>
                    <div className="w-full lg:w-[49%]">
                        <MissedReminders />
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Analytics;