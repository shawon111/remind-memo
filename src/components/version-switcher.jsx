"use client"

import * as React from "react"

import {
  DropdownMenu,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function VersionSwitcher() {
  return (
    (<SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <div className="logo w-full p-[8px]">
            <h3 className="text-xl font-bold text-white text-start"><span className="brand-bg px-[8px] pb-[6px] pt-[3px] rounded">Memory</span> Mate</h3>
          </div>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>)
  );
}
