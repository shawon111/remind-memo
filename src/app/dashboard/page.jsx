import OverviewStats from "@/components/Dashboard/Overview/OverviewStats";
import RemindersCalenderView from "@/components/Dashboard/Overview/RemindersCalenderView";
import RemindersFunFact from "@/components/Dashboard/Overview/RemindersFunFact";
import UpcomingReminders from "@/components/Dashboard/Overview/UpcomingReminders";

const Dashboard = () => {
    return (
        <div>
            <OverviewStats />
            <section>
                <div className="flex items-start justify-between flex-wrap pt-10">
                    <div className="w-full lg:w-[60%]">
                        <UpcomingReminders />
                    </div>
                    <div className="w-full lg:w-[38%]">
                        <RemindersCalenderView />
                    </div>
                </div>
            </section>
            <section>
                <div className="pt-10">
                    <div>
                        <RemindersFunFact />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;