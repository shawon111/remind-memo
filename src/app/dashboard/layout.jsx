import { AppSidebar } from "@/components/app-sidebar";
import DashboardQuickActions from "@/components/Dashboard/Overview/DashboardQuickActions";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <div>
                    <SidebarProvider className="mark-provider">
                        <AppSidebar />
                        <main className="w-full p-[10px] lg:px-[20px] py-[10px]">
                            <div>
                                <SidebarTrigger />
                            </div>
                            <div className="pt-5">
                                <DashboardQuickActions />
                                {children}
                            </div>
                        </main>
                    </SidebarProvider>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default DashboardLayout;