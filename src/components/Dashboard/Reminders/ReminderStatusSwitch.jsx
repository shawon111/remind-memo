"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

const ReminderStatusSwitch = ({ status, id }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setIsChecked(status === "enabled" ? true : false);
        setLoading(false);
    }, []);
    const handleStatusCheck = async (checked) => {
        setLoading(true);
        try {
            const response = await fetch(`/api/reminders/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: checked===true ? "enabled" : "disabled"
                })
            });
            const data = await response.json();
            if (data.error) {
                setIsChecked(!checked);
                setLoading(false);
            }else{
                setIsChecked(checked);
                setLoading(false);
            }
            setLoading(false);
        } catch (error) {
            setIsChecked(!checked);
            setLoading(false);
        }
    }
    if (loading) {
        return <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>;
    }
    return (
        <Switch onCheckedChange={(checked) => {
            handleStatusCheck(checked);
        }} checked={isChecked} />
    );
};

export default ReminderStatusSwitch;