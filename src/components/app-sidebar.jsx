import { FaHome, FaPlus, FaBell } from "react-icons/fa";
import { VersionSwitcher } from "@/components/version-switcher"
import { currentUser } from '@clerk/nextjs/server'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
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
import LogOut from "./Footer/LogOut";

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
          url: '/dashboard/reminders/create',
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
    }
  ],
}

export async function AppSidebar({
  ...props
}) {
  const user = await currentUser();
  const { profileImageUrl, username } = user;
  return (
    (<Sidebar {...props} className="border-0 pt-2 ps-2">
      <div className="md:border md:rounded-xl h-full flex flex-col justify-between gap-10">
        <div>
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
        </div>
        <SidebarFooter className="pb-4">
          <div className="flex items-center gap-4">
            <div className={"flex items-center justify-center brand-bg text-white font-bold w-12 h-12 rounded-full"}>
              {profileImageUrl ? (
                <img src={profileImageUrl} alt="profile" className="w-full h-full object-cover rounded-full" />
              ) : (
                <span className="text-lg">{username ? username[0] : "P"}</span>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-nowrap">
              <p className="text-sm font-medium leading-none">{username}</p>
              <LogOut />
            </div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </div>
    </Sidebar>)
  );
}
