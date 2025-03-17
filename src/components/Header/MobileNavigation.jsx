import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import GeneralNavMenu from "../NavMenu/GeneralNavMenu";
import UserMenu from "../UserMenu";

const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent>
            <SheetTitle></SheetTitle>
                <GeneralNavMenu />
                <div className="mt-5">
                    <UserMenu />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavigation;