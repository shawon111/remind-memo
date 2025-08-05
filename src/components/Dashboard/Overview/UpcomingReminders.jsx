import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cookies } from 'next/headers';

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { formatDate } from "@/lib/formatDate";

export default async function UpcomingReminders() {
    const cookieStore = cookies();
    const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const getReminders = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/reminders/upcoming?limit=5`, {
                cache: "no-store",
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Cookie: cookieStore.toString()
                }
            })
            if (!response.ok) {
                console.error("Error fetching reminders:", response.statusText)
                return []
            }
            const data = await response.json()
            return data;
        }
        catch (error) {
            console.error("Error fetching reminders:", error)
            return []
        }
    }
    const reminders = await getReminders();

    return (
        <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                    <CardTitle>Upcoming Reminders</CardTitle>
                    <CardDescription className="tajawal">
                        Your Upcoming Reminders at a Glance.
                    </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                    <Link className="tajawal" href="dashboard/reminders/upcoming">
                        View All
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                {
                    reminders.length === 0 ? (
                        <div className="flex items-center justify-center h-full w-full text-muted-foreground font-bold tajawal">
                            No Upcoming Reminders
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Reminder</TableHead>
                                    <TableHead className="hidden xl:table-column"></TableHead>
                                    <TableHead className="hidden xl:table-column"></TableHead>
                                    <TableHead className="hidden xl:table-column"></TableHead>
                                    <TableHead className="text-right">Event Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    reminders.map((reminder, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div className="font-medium">
                                                    <Link className="capitalize" href="#">{reminder.reminder_title}</Link>
                                                </div>
                                                <div className="hidden text-sm text-muted-foreground md:inline tajawal capitalize">
                                                    {reminder.reminder_type}
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden xl:table-column"></TableCell>
                                            <TableCell className="hidden xl:table-column">
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                                            </TableCell>
                                            <TableCell className="text-right">{formatDate(reminder.event_date)}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    )
                }

            </CardContent>
        </Card>
    )
}
