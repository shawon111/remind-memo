import OverviewStats from "@/components/Dashboard/Overview/OverviewStats";
import RemindersCalenderView from "@/components/Dashboard/Overview/RemindersCalenderView";
import UpcomingReminders from "@/components/Dashboard/Overview/UpcomingReminders";

export const metadata = {
  title: "Dashboard - Memory Mate | Manage Your Reminders",
  description: "Access your Memory Mate dashboard to view upcoming reminders, manage birthdays, anniversaries, and special events. Stay organized and never miss important dates.",
  keywords: ['dashboard', 'reminders', 'manage reminders', 'upcoming events', 'birthday reminders', 'anniversary reminders'],
  openGraph: {
    title: "Dashboard - Memory Mate | Manage Your Reminders",
    description: "Access your Memory Mate dashboard to view upcoming reminders, manage birthdays, anniversaries, and special events. Stay organized and never miss important dates.",
    url: 'https://mate.fabbythemes.com/dashboard',
    type: 'website',
  },
};

const Dashboard = () => {
    return (
        <div>
            <OverviewStats />
            <section>
                <div className="flex items-start justify-between flex-wrap pt-10 gap-y-3 pb-3">
                    <div className="w-full lg:w-[60%]">
                        <UpcomingReminders />
                    </div>
                    <div className="w-full lg:w-[38%]">
                        <RemindersCalenderView />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;