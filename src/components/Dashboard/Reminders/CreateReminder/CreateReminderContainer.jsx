"use client";

import { useState } from "react";
import CreateReminderProgressBar from "./CreateReminderProgressBar";
import CreateReminderCard from "./CreateReminderCard";

const CreateReminderContainer = () => {
    const [progress, setProgress] = useState(20);
    return (
        <div className="pt-12 pb-12">
            <div className="w-[600px] mx-auto">
                <h2 className="text-center mb-6 text-[30px] md:text-[36px] font-bold">Create Reminder</h2>
                <CreateReminderProgressBar progress={progress} />
                <CreateReminderCard />
            </div>
        </div>
    );
};

export default CreateReminderContainer;