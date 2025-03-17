import EmailTemplate from "@/components/Email/EmailTemplate";
import { render } from "@react-email/render";
import resendClient from "./resendClient";

const sendEmail = async (reminder, notification) => {
    try {
        if (!process.env.FORM_EMAIL) {
            throw new Error("Missing form email");
        }

        // Render email HTML
        const emailHTML = await render(
            <EmailTemplate reminder={reminder} notification={notification} />,
            { pretty: false }
        );

        // Send email via Resend
        const response = await resendClient.emails.send({
            from: `Memory Mate <${process.env.FORM_EMAIL}>`,
            to: reminder.email,
            subject: reminder.reminder_title,
            html: emailHTML,
        });

        console.log("Email sent successfully:", response);
        return response;
    } catch (error) {
        console.error("Error sending email:", error);
        return null; 
    }
};

export default sendEmail;
