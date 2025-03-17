"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const reminders = [
    {
        title: "Birthday Reminder",
        href: "/reminders/birthday-reminder",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Anniversary Reminder",
        href: "/reminders/marriage-anniversary-reminder",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Event Reminder",
        href: "/reminders/event-reminder",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Important Reminder",
        href: "/reminders/important-reminder",
        description: "Visually or semantically separates content.",
    }
]

const GeneralNavMenu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-1 space-y-5 md:space-y-0">
                <NavigationMenuItem>
                    <Link className="dark-text text-xl md:text-base font-semibold space-grotesk" href="/" passHref>
                        Home
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-[#fff0] p-0 md:p-3">
                        <p className="dark-text text-xl md:text-base font-semibold space-grotesk">Reminders</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {reminders.map((reminder) => (
                                <ListItem
                                    key={reminder.title}
                                    title={reminder.title}
                                    href={reminder.href}
                                >
                                    {reminder.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link className="dark-text text-xl md:text-base font-semibold space-grotesk" href="/contact" passHref>
                        Contact
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-base font-semibold leading-none">{title}</div>
                    <p className="line-clamp-2 text-base leading-snug tajawal font-normal text-muted-foreground hidden md:block">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
});
ListItem.displayName = "ListItem"

export default GeneralNavMenu;
