import OverviewStats from "@/components/Dashboard/Overview/OverviewStats";
import RemindersCalenderView from "@/components/Dashboard/Overview/RemindersCalenderView";
import UpcomingReminders from "@/components/Dashboard/Overview/UpcomingReminders";

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