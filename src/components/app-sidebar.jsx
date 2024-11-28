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

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
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
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.name}>
            <SidebarGroupLabel>
              <div className="flex gap-x-1 items-center dark-text">
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
                        <Link className="text-sm dark-text tajawal" href={item.url}>{item.name}</Link>
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
    </Sidebar>)
  );
}
