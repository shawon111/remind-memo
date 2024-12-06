import { TypesChartClient } from "./TypesChartClient";

const ReminderTypesChart = () => {
    const data = [
        { reminderType: "Birthday", count: 186, fill: "#45dfb1" },
        { reminderType: "Anniversary", count: 305, fill: "#213a57" },
        { reminderType: "Event", count: 237, fill: "#ef476f" },
        { reminderType: "Custom", count: 173, fill: "#ffd166" }
    ]

    return (
        <div>
            <TypesChartClient chartData={data} />
        </div>
    );
};

export default ReminderTypesChart;