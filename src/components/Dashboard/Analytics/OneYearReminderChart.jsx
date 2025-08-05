import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import YearChart from "./YearChart";

const OneYearReminderChart = ({ data }) => {
    const monthNames = [
        '2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01', '2023-06-01',
        '2023-07-01', '2023-08-01', '2023-09-01', '2023-10-01', '2023-11-01', '2023-12-01'
    ]

    // count total for this year
    const totalCount = data.reduce((acc, item) => acc + item);

    const chartData = data.map((count, index) => ({
        date: monthNames[index],
        count
    }))
    return (
        <Card>
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle>12 Months of this year at a Glance!</CardTitle>
                    <CardDescription>
                        Showing total reminders for this year
                    </CardDescription>
                </div>
                <div className="flex">
                    <button
                        className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                    >
                        <span className="text-xs text-muted-foreground">
                            Total
                        </span>
                        <span className="text-lg font-bold leading-none sm:text-3xl">
                            {totalCount}
                        </span>
                    </button>
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <YearChart chartData={chartData} />
            </CardContent>
        </Card>
    );
};

export default OneYearReminderChart;