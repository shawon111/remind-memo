import OverviewStats from "@/components/Dashboard/Overview/OverviewStats";
import UpcomingReminders from "@/components/Dashboard/Overview/UpcomingReminders";

const Dashboard = () => {
    return (
        <div>
            <OverviewStats />
            <section>
                <div className="flex items-center justify-between flex-wrap pt-10">
                    <div className="w-full lg:w-[60%]">
                        <UpcomingReminders />
                    </div>
                    <div className="w-full lg:w-[38%]"></div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;