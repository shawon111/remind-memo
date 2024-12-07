import CelebratedEvents from "@/components/Dashboard/Analytics/CelebratedEvents";
import OneYearReminderChart from "@/components/Dashboard/Analytics/OneYearReminderChart";
import ReminderTypesChart from "@/components/Dashboard/Analytics/ReminderTypesChart";
import OverviewStats from "@/components/Dashboard/Overview/OverviewStats";

const page = () => {
    return (
        <div>
            <OverviewStats />
            <section>
                <div className="flex items-start justify-between flex-wrap pt-10 gap-y-3">
                    <div className="w-full lg:w-[60%]">
                        <OneYearReminderChart />
                    </div>
                    <div className="w-full lg:w-[38%]">
                        <ReminderTypesChart />
                    </div>
                </div>
            </section>
            <section>
                <div className="flex items-start justify-between flex-wrap pt-10 gap-y-3">
                    <div className="w-full lg:w-[49%]">
                        <CelebratedEvents />
                    </div>
                    <div className="w-full lg:w-[49%]">

                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;