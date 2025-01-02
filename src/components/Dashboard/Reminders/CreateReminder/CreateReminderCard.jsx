"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { reminderSchema1, reminderSchema2, reminderSchema3 } from "@/lib/reminderFormSchema";
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const steps = [
    { id: 1, schema: reminderSchema1 },
    { id: 2, schema: reminderSchema2 },
    { id: 3, schema: reminderSchema3 },
]

const CreateReminderCard = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const { register, handleSubmit, trigger, formState: { errors } } = useForm({
        resolver: zodResolver(steps[currentStep].schema),
        defaultValues: {
            reminder_type: 'birthday',
            reminder_title: '',
            description: '',
            how_to_celebrate: '',
            event_date: new Date(),
            is_recurring: false,
            frequency: null,
            status: 'enabled',
            notifications: [
                {
                    notification_type: 'email',
                    date: new Date(),
                    message: '',
                    status: 'pending'
                }
            ]
        }
    })

    const nextStep = async () => {
        const isValid = await trigger();
        if (isValid) setCurrentStep((prev) => prev + 1);
        console.log("Errors:", errors);
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const onSubmit = (data) => {
        console.log("Final Form Data:", data);
    };

    return (
        <div className="mt-6">
            <Card className="pt-8">
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <>
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between gap-4">
                                    <div className="w-full">
                                        <Input {...register("reminder_title")} className="w-full" type="text" placeholder="Reminder Title" />
                                    </div>
                                    <div className="w-full">
                                        <Select {...register("reminder_type")} className="w-full">
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Reminder Type?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Reminder Types</SelectLabel>
                                                    <SelectItem value="apple">Birthday</SelectItem>
                                                    <SelectItem value="banana">Anniversary</SelectItem>
                                                    <SelectItem value="blueberry">Event</SelectItem>
                                                    <SelectItem value="grapes">Other</SelectItem>
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
                        </>
                    </form>
                </CardContent>
                <CardFooter>
                    <Pagination>
                        <PaginationContent className="flex justify-between w-full">
                            <PaginationItem>
                                <PaginationPrevious onClick={prevStep} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext onClick={nextStep} />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CreateReminderCard;