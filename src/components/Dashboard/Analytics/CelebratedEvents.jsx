import { CelebratedEventsChart } from "./CelebratedEventsChart";

const CelebratedEvents = () => {
    const chartData = [
        { events: 5, fill: "#45dfb1" },
    ]
    return (
        <div>
            <CelebratedEventsChart chartData={chartData} />
        </div>
    );
};

export default CelebratedEvents;