'use client'
import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

const RemindersCalenderView = () => {
    const [date, setDate] = useState(new Date());
    const [reminders, setReminders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [emptymessage, setEmptyMessage] = useState("Select a date to view reminders");

    // fetch reminders of curent date
    const fetchReminders = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/reminders/by-date?date=${date.toISOString()}`);
            if (!response.ok) {
                throw new Error("Failed to fetch reminders");
            }
            const data = await response.json();
            if (data.length === 0) {
                setEmptyMessage("No reminders found for this date");
            } else {
                setEmptyMessage("Select a date to view reminders");
            }
            setReminders(data);
        } catch (error) {
            console.error("Error fetching reminders:", error);
        } finally {
            setLoading(false);
        }
    }

    // fetch reminders on component mount
    useEffect(()=> {
        fetchReminders();
    }, []);

    // fetch eminders when a date is selected
    const handleGetReminders = async (selectedDate) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/reminders/by-date?date=${selectedDate.toISOString()}`);
            if (!response.ok) {
                throw new Error("Failed to fetch reminders");
            }
            const data = await response.json();
            if (data.length === 0) {
                setEmptyMessage("No reminders found for this date");
            } else {
                setEmptyMessage("Select a date to view reminders");
            }
            setReminders(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching reminders:", error);
        }
    }
    // handle date change
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        if (selectedDate) {
            handleGetReminders(selectedDate);
        } else {
            setReminders([]);
            setEmptyMessage("Select a date to view reminders");
        }
    };
    return (
        <div className="w-full">
            <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateChange}
                className="rounded-md border shadow w-full dashboard-calendar"
                classNames={{
                    months:
                        "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
                    month: "space-y-4 w-full flex flex-col",
                    table: "w-full h-full border-collapse space-y-1",
                    head_row: "",
                    row: "w-full mt-2",
                }}
            />
            <div className="mt-4">
                {
                    loading ? (
                        <div className="text-center py-4">Loading reminders...</div>
                    ) : reminders.length <=0? <div className="text-center text-gray-500">{emptymessage}</div> : (
                        <div className="mt-4">
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
                                    {reminders.length > 0 ? (
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
                                    ) : ''}
                                </TableBody>
                            </Table>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RemindersCalenderView;