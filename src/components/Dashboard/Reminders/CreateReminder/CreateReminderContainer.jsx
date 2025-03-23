import { Button } from "@/components/ui/button";
import CreateReminderCard from "./CreateReminderCard";
import { currentUser } from '@clerk/nextjs/server'
import Link from "next/link";

const CreateReminderContainer = async () => {
    const user = await currentUser();
    const { privateMetadata } = user;
    const { limit, availableReminder } = privateMetadata;
    if (availableReminder === 0) {
        return (
            <div className="pt-12 pb-12">
                <div className="lg:w-[600px] mx-auto">
                    <div>
                        <h4 className="text-center text-2xl">You have reached the limit of creating reminders</h4>
                        <p className="text-center">Please upgrade your account to create more reminders</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="pt-12 pb-12">
            <div className="lg:w-[600px] mx-auto">
                <h2 className="text-center mb-6 text-[30px] md:text-[36px] font-bold">Create Your Reminder</h2>
                {
                    limit && limit > 0 ? <CreateReminderCard /> : <div>
                        <p className="text-center">Please finalize your account to create reminders</p>
                        <div className="flex justify-center mt-4">
                            <Link href="/process-signup"><Button>Finalize</Button></Link>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default CreateReminderContainer;