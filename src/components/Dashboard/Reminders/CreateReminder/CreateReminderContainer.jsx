import CreateReminderCard from "./CreateReminderCard";

const CreateReminderContainer = () => {
    return (
        <div className="pt-12 pb-12">
            <div className="lg:w-[600px] mx-auto">
                <h2 className="text-center mb-6 text-[30px] md:text-[36px] font-bold">Create Your Reminder</h2>
                <CreateReminderCard />
            </div>
        </div>
    );
};

export default CreateReminderContainer;