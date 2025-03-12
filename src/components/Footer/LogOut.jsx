import { Button } from "@/components/ui/button"
import { SignOutButton } from "@clerk/nextjs";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";

const LogOut = () => {
    return (
        <div>
            <Dialog className="">
                <DialogTrigger asChild>
                    <Button variant="outline">Log Out</Button>
                </DialogTrigger>
                <DialogContent className="fixed inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white rounded-lg shadow-lg px-8 py-16 w-[280px] md:w-[600px] h-[fit-content]">
                    <div>
                        <div className="mb-8">
                            <DialogTitle className="text-black">Are you sure you want to log out?</DialogTitle>
                        </div>
                        <div className="flex justify-center space-x-2">
                            <DialogClose asChild>
                                <Button className="bg-[#09090B] text-white hover:text-red-950">Cancel</Button>
                            </DialogClose>
                            <SignOutButton>
                                <Button variant="destructive">Log Out</Button>
                            </SignOutButton>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default LogOut;