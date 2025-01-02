"use client"; 

import { Progress } from "@/components/ui/progress";

const CreateReminderProgressBar = ({progress}) => {
    return (
        <section className="w-full">
            <Progress value={progress} className="w-full h-2" />
        </section>
    );
};

export default CreateReminderProgressBar;
