import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import YearChart from "./YearChart";

const chartData = [
    { date: "2023-01-01", count: 45 },
    { date: "2023-02-01", count: 67 },
    { date: "2023-03-01", count: 12 },
    { date: "2023-04-01", count: 89 },
    { date: "2023-05-01", count: 34 },
    { date: "2023-06-01", count: 76 },
    { date: "2023-07-01", count: 29 },
    { date: "2023-08-01", count: 55 },
    { date: "2023-09-01", count: 92 },
    { date: "2023-10-01", count: 40 },
    { date: "2023-11-01", count: 61 },
    { date: "2023-12-01", count: 73 }
  ];  
  
const OneYearReminderChart = () => {
    return (
        <Card>
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle>Your Next 12 Months at a Glance!</CardTitle>
                    <CardDescription>
                        Showing total reminders for the next 12 months
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
                            30
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