import { TypesChartClient } from "./TypesChartClient";

const ReminderTypesChart = ({data}) => {
    const chartData = data.map(item=> ({
        reminderType: item.reminder_type,
        count: item._count,
        fill: item.reminder_type === "Birthday" ? "#45dfb1" : item.reminder_type === "Anniversary" ? "#213a57" :
            item.reminder_type === "Event" ? "#ef476f" : "#ffd166"
    })) || [];
    // if a reminderType(for example there is no anniversary) is not found, add that type with count 0
    const reminderTypes = ["Birthday", "Anniversary", "Event", "Custom"];
    reminderTypes.forEach(type => {
        if (!chartData.some(item => item.reminderType === type)) {
            chartData.push({ reminderType: type, count: 0, fill: type === "Birthday" ? "#45dfb1" : type === "Anniversary" ? "#213a57" :
                type === "Event" ? "#ef476f" : "#ffd166" });
        }
    });
    
    return (
        <div>
            <TypesChartClient chartData={chartData} />
        </div>
    );
};

export default ReminderTypesChart;