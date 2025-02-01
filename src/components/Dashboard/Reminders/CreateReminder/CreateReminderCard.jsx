"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reminderSchema } from "@/lib/reminderFormSchema";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import EventDatePicker from "./EventDatePicker";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CalendarIcon, Plus } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const CreateReminderCard = () => {

    const { toast } = useToast();

    const [notification, setNotification] = useState({});
    const [notifications, setNotifications] = useState([]);

    const { register, setValue, watch, handleSubmit, trigger, formState: { errors } } = useForm({
        resolver: zodResolver(reminderSchema),
        defaultValues: {
            notifications: [
                {
                    notification_type: 'email',
                    date: new Date(),
                    message: '',
                    status: 'pending',
                },
            ],
        },
    });

    const saveNotification = () => {
        setNotifications([...notifications, notification]);
        setNotification({});
        toast({
            description: "Notification added successfully.",
        })
    };

    useEffect(() => {
        setValue("notifications", notifications);
        console.log("Notifications:", notifications);
    }, [notifications]);

    const onSubmit = async (data) => {
        try {
            console.log("Final Form Data:", data);
        } catch (error) {
            console.error("Validation failed:", errors);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(
            onSubmit,
            (errors) => {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Fields are required, please fill them up.",
                })
            }
        )()
    }

    return (
        <div className="mt-6">
            <Card className="pt-8">
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between gap-4">
                                    <div className="w-full">
                                        <Input {...register("reminder_title")} className="w-full" type="text" placeholder="Reminder Title" />
                                    </div>
                                    <div className="w-full">
                                        <Select
                                            value={watch("reminder_type")}
                                            onValueChange={(value) => setValue("reminder_type", value)}
                                            className="w-full">
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Reminder Type?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Reminder Types</SelectLabel>
                                                    <SelectItem value="birthday">Birthday</SelectItem>
                                                    <SelectItem value="anniversary">Anniversary</SelectItem>
                                                    <SelectItem value="event">Event</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <div className="w-full">
                                        <Textarea {...register("description")} placeholder="Description" />
                                    </div>
                                    <div className="w-full">
                                        <Textarea {...register("how_to_celebrate")} placeholder="How do you want to celebrate?" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between gap-4">
                                    <div className="w-full">
                                        <EventDatePicker setValue={setValue} watch={watch} />
                                    </div>
                                    <div className="w-full flex items-center gap-4">
                                        <Checkbox
                                            id="is_recurring"
                                            checked={watch("is_recurring")}
                                            onCheckedChange={(checked) => setValue("is_recurring", checked)}
                                        />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Reccuring?
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between gap-4">
                                    <div className="w-full">
                                        <Select
                                            value={watch("frequency")}
                                            onValueChange={(value) => setValue("frequency", value)}
                                            className="w-full">
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Frequency" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Frequency</SelectLabel>
                                                    <SelectItem value="weekly">weekly</SelectItem>
                                                    <SelectItem value="monthly">monthly</SelectItem>
                                                    <SelectItem value="yearly">yearly</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="w-full">
                                        <Select
                                            value={watch("status")}
                                            onValueChange={(value) => setValue("status", value)}
                                            className="w-full">
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Status</SelectLabel>
                                                    <SelectItem value="enabled">Enabled</SelectItem>
                                                    <SelectItem value="disabled">Disabled</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <div className="w-full">

                                    </div>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <div className="w-full">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline">Add Notification <Plus /></Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-80">
                                                <div className="grid gap-4">
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium leading-none">Notification 1</h4>
                                                        <p className="text-sm text-muted-foreground">
                                                            Set a notofication for the reminder.
                                                        </p>
                                                    </div>
                                                    <div className="grid gap-2">
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label className="" htmlFor="width">Notification Type</Label>
                                                            <Select
                                                                value={notification?.notification_type}
                                                                onValueChange={(value) => setNotification({ ...notification, notification_type: value })}
                                                                className="w-full">
                                                                <SelectTrigger className="">
                                                                    <SelectValue placeholder="Type" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Type</SelectLabel>
                                                                        <SelectItem value="email">Email</SelectItem>
                                                                        <SelectItem value="sms">SMS</SelectItem>
                                                                        <SelectItem value="push">Push Notifiction</SelectItem>
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="maxWidth">Notification Date</Label>
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn(
                                                                            "w-[100%] justify-start text-left font-normal overflow-hidden",
                                                                            !notification.date && "text-muted-foreground"
                                                                        )}
                                                                    >
                                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                                        {notification?.date ? format(new Date(notification?.date), "PPP") : "Select Date"}
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-auto p-0">
                                                                    <Calendar
                                                                        mode="single"
                                                                        onSelect={(date) => setNotification({ ...notification, date: date })}
                                                                        initialFocus
                                                                        selected={notification?.date}
                                                                    />
                                                                </PopoverContent>
                                                            </Popover>
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="height">Message</Label>
                                                            <Textarea onChange={(e) => setNotification({ ...notification, message: e.target.value })} placeholder="Notification Message" />
                                                        </div>
                                                        <div className="grid grid-cols-2 items-center gap-4">
                                                            <Label htmlFor="maxHeight">Status</Label>
                                                            <Select
                                                                value={notification?.status}
                                                                onValueChange={(value) => setNotification({ ...notification, status: value })}
                                                                className="w-full">
                                                                <SelectTrigger className="">
                                                                    <SelectValue placeholder="Status" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectLabel>Status</SelectLabel>
                                                                        <SelectItem value="sent">Sent</SelectItem>
                                                                        <SelectItem value="pending">Pending</SelectItem>
                                                                        <SelectItem value="failed">Failed</SelectItem>
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div>
                                                            <Button onClick={saveNotification} className="mt-3">Save</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button onClick={(e) => handleFormSubmit(e)} variant="outline">Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CreateReminderCard;