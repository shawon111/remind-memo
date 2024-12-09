import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export function ReminderCard({ className, reminder }) {
    const { reminder_type, title, notifications, status } = reminder;
    return (
        <div className="w-full md:w-[49%] lg:w-[32.5%]">
            <Card className={cn("w-full", className)}>
                <CardHeader className="flex flex-row items-start justify-between">
                    <div className="flex gap-y-1 flex-col">
                        <CardTitle className="capitalize">{reminder_type}</CardTitle>
                        <CardDescription className="capitalize">{title}</CardDescription>
                    </div>
                    <Badge>{status}</Badge>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                        <BellRing />
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                                Enable Reminder
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Enable to get notifications.
                            </p>
                        </div>
                        <Switch />
                    </div>
                    <div>
                        {notifications.map((notification, index) => (
                            <div
                                key={index}
                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                            >
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        Notification {index + 1}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {notification.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">
                        <Check /> Mark as celebrated
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
