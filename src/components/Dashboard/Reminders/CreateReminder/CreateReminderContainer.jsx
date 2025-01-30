"use client";

import { useState } from "react";
import CreateReminderCard from "./CreateReminderCard";

const CreateReminderContainer = () => {
    const [progress, setProgress] = useState(20);
    return (
        <div className="pt-12 pb-12">
            <div className="w-[600px] mx-auto">
                <h2 className="text-center mb-6 text-[30px] md:text-[36px] font-bold">Create Your Reminder</h2>
                <CreateReminderCard />
            </div>
        </div>
    );
};

export default CreateReminderContainer;