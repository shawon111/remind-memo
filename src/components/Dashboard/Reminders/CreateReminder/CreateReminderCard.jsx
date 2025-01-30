"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reminderSchema } from "@/lib/reminderFormSchema";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import EventDatePicker from "./EventDatePicker";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CreateReminderCard = () => {

    const { toast } = useToast();

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
                                        <Textarea {...register("notifications[0].message")} placeholder="Notification Message" />
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