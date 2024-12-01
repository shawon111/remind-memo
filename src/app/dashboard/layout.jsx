import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <SidebarProvider className="mark-provider">
                <AppSidebar />
                <main className="w-full p-[10px] lg:px-[20px] py-[10px]">
                    <div>
                        <SidebarTrigger />
                    </div>
                    <div className="pt-5">
                        {children}
                    </div>
                </main>
            </SidebarProvider>
        </div>
    );
};

export default DashboardLayout;