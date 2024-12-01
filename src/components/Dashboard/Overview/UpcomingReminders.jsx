import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

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

export default function UpcomingReminders() {
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
                    <Link className="tajawal" href="#">
                        View All
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Reminder</TableHead>
                            <TableHead className="hidden xl:table-column">Type</TableHead>
                            <TableHead className="hidden xl:table-column">Status</TableHead>
                            <TableHead className="hidden xl:table-column">Amount</TableHead>
                            <TableHead className="text-right">Event Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">
                                    <Link href="#">Liam Johnson</Link>
                                </div>
                                <div className="hidden text-sm text-muted-foreground md:inline tajawal">
                                    Birthday Reminder
                                </div>
                            </TableCell>
                            <TableCell className="hidden xl:table-column"></TableCell>
                            <TableCell className="hidden xl:table-column">
                            </TableCell>
                            <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                            </TableCell>
                            <TableCell className="text-right">2023-06-23</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
