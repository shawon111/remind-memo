"use client"

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { FaHome, FaPlus, FaBell, FaFileAlt } from "react-icons/fa";
import { LuChevronsUpDown } from "react-icons/lu";

const DashboardSidebar = () => {
    // menu items data
    const menuItems = [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: <FaHome />,
            submenu: [
                {
                    name: 'Overview',
                    url: '/dashboard/overview',
                },
                {
                    name: 'Analytics',
                    url: '/dashboard/analytics',
                },
            ],
        },
        {
            name: 'Create',
            url: '/create',
            icon: <FaPlus />,
            submenu: [
                {
                    name: 'New Reminder',
                    url: '/create/reminder',
                },
                {
                    name: 'New Template',
                    url: '/create/template',
                },
            ],
        },
        {
            name: 'Reminders',
            url: '/reminders',
            icon: <FaBell />,
            submenu: [
                {
                    name: 'Upcoming',
                    url: '/reminders/upcoming',
                },
                {
                    name: 'Past',
                    url: '/reminders/past',
                },
            ],
        },
        {
            name: 'Templates',
            url: '/templates',
            icon: <FaFileAlt />,
            submenu: [
                {
                    name: 'Manage Templates',
                    url: '/templates/manage',
                },
                {
                    name: 'Create Template',
                    url: '/templates/create',
                },
            ],
        },
    ];

    return (
        <Sidebar>
            <SidebarHeader className="dark-bg">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="logo w-full">
                            <h3 className="text-xl font-bold text-white text-center lg:text-start"><span className="brand-bg px-[8px] pb-[6px] pt-[3px] rounded">Memory</span> Mate</h3>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="dark-bg">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton asChild>
                                        <Link className="text-white" href={item.url}>
                                            {item.icon}
                                            <span>{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>

    );
};

export default DashboardSidebar;