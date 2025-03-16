const transporter = require("./transporter");
import EmailTemplate from "@/components/Email/EmailTemplate";
import { render } from "@react-email/render";

const sendEmail = async (reminder, notification) => {
    const emailHTML = await render(<EmailTemplate reminder={reminder} notification={notification} />, {
        pretty: false,
    });
    try {
        const mailInfo = await transporter.sendMail({
            from: process.env.SMTP_EMAIL,
            to: reminder.email,
            subject: reminder.reminder_title,
            html: emailHTML,
        });
        console.log("mailinfo", mailInfo);
    } catch (error) {
        console.error("Error sending email", error);
    }
}

module.exports = sendEmail;