import { MissedRemindersChart } from "./MissedRemindersChart";

const MissedReminders = () => {
    const chartData = [
        { reminders: 3, fill: "#ef476f" },
    ]
    return (
        <div>
            <MissedRemindersChart chartData={chartData} />
        </div>
    );
};

export default MissedReminders;