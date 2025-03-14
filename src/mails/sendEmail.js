const transporter = require("./transporter");

const sendEmail = async (email, subject, message) => {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_EMAIL,
            to: email,
            subject: subject,
            html: message,
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email", error);
    }
}

module.exports = sendEmail;