import CreateReminderContainer from "@/components/Dashboard/Reminders/CreateReminder/CreateReminderContainer";

export const metadata = {
  title: "Create Reminder - Memory Mate | Add New Reminders",
  description: "Create new reminders for birthdays, anniversaries, and special events in Memory Mate. Set up notifications and never miss important dates again.",
  keywords: ['create reminder', 'add reminder', 'new reminder', 'birthday reminder', 'anniversary reminder', 'event reminder', 'set notification'],
  openGraph: {
    title: "Create Reminder - Memory Mate | Add New Reminders",
    description: "Create new reminders for birthdays, anniversaries, and special events in Memory Mate. Set up notifications and never miss important dates again.",
    url: 'https://mate.fabbythemes.com/dashboard/reminders/create',
    type: 'website',
  },
};

const CreateReminderPage = () => {
    return (
        <div>
            <CreateReminderContainer />
        </div>
    );
};

export default CreateReminderPage;