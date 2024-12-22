import * as React from "react"

import { FaHome, FaPlus, FaBell, FaFileAlt } from "react-icons/fa";
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link";

const menuData = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      name: 'Dashboard',
      icon: <FaHome />,
      submenu: [
        {
          name: 'Overview',
          url: '/dashboard',
        },
        {
          name: 'Analytics',
          url: '/dashboard/analytics',
        },
      ],
    },
    {
      name: 'Create',
      icon: <FaPlus />,
      submenu: [
        {
          name: 'New Reminder',
          url: '/dashboard/reminder/create',
        }
      ],
    },
    {
      name: 'Reminders',
      icon: <FaBell />,
      submenu: [
        {
          name: 'All',
          url: '/dashboard/reminders',
        },
        {
          name: 'Upcoming',
          url: '/dashboard/reminders/upcoming',
        },
        {
          name: 'Past',
          url: '/dashboard/reminders/past',
        },
      ],
    },
    {
      name: 'Templates',
      icon: <FaFileAlt />,
      submenu: [
        {
          name: 'Explore Templates',
          url: '/dashboard/templates',
        }
      ],
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar {...props} className="border-0 pt-2 ps-2">
      <div className="md:border md:rounded-xl h-full">
        <SidebarHeader>
          <VersionSwitcher />
        </SidebarHeader>
        <SidebarContent>
          {/* We create a SidebarGroup for each parent. */}
          {menuData.navMain.map((item) => (
            <SidebarGroup key={item.name}>
              <SidebarGroupLabel>
                <div className="flex gap-x-1 items-center brand-text">
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </div>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.submenu.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <div>
                          <Link className="text-sm tajawal w-full" href={item.url}>{item.name}</Link>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </div>
    </Sidebar>)
  );
}
