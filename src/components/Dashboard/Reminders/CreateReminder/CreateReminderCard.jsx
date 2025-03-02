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

    const { register, setValue, watch, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(reminderSchema),
    });

    const saveNotification = () => {
        if (!notification.date || !notification.notification_type || !notification.message) {
            toast({
                variant: "destructive",
                title: "Uh oh! fill all the fields to save the notification.",
            })
            return;
        } else {
            const { date, notification_type, message } = notification;
            const finalNotification = {
                date,
                notification_type,
                message,
                status: 'pending'
            };
            setNotifications([...notifications, finalNotification]);
            setNotification({});
            toast({
                description: "Notification added successfully.",
            })
        }
    };

    useEffect(() => {
        if (notifications.length > 0) {
            setValue("notifications", notifications);
        }
        console.log("Notifications:", notifications);
    }, [notifications]);

    const onSubmit = async (data) => {
        console.log("Data:", data);
        try {
            const response = await fetch('/api/reminders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log("Response:", response);
            if (!response.ok) {
                toast({
                    variant: "destructive",
                    title: "Failed to create reminder.",
                    description: "There was an error while creating the reminder. Please try again.",
                });
            } else {
                reset();
                setNotifications([]);
                toast({
                    description: "Reminder created successfully.",
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Failed to create reminder.",
                description: "There was an error while creating the reminder. Please try again.",
            });
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
                                <div className="flex justify-between flex-col md:flex-row gap-4">
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
                                <div className="flex justify-between flex-col md:flex-row gap-4">
                                    <div className="w-full">
                                        <Textarea {...register("description")} placeholder="Description" />
                                    </div>
                                    <div className="w-full">
                                        <Textarea {...register("how_to_celebrate")} placeholder="How do you want to celebrate?" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between gap-4 flex-col md:flex-row">
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
                                <div className="flex justify-between flex-col md:flex-row gap-4">
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
                                    <div className="w-full">
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline">Add Notification <Plus /></Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-80">
                                                <div className="grid gap-4">
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium leading-none text-muted-foreground">Set a notofication for the reminder.</h4>
                                                        <p className="text-sm text-muted-foreground">

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
                                                        <div>
                                                            <Button onClick={saveNotification} className="mt-3">Save</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>
                                <div className="flex justify-between flex-col md:flex-row gap-4">
                                    <div className="w-full">
                                        <div>
                                            {notifications.length > 0 && <h3 className="mb-5 mt-5">Your Notifications</h3>}
                                        </div>
                                        {notifications.length > 0 && notifications.map((notif, index) => (
                                            <Card key={index} className="mb-4 pt-5">
                                                <CardContent>
                                                    <h4 className="text-muted-foreground mb-4">Notification {index + 1}</h4>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="flex justify-between">
                                                            <Label>Type:</Label>
                                                            <p>{notif.notification_type}</p>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <Label>Date:</Label>
                                                            <p>{notif.date ? format(new Date(notif.date), "PPP") : "N/A"}</p>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <Label>Message:</Label>
                                                            <p>{notif.message}</p>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <Label>Status:</Label>
                                                            <p>{notif.status}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
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