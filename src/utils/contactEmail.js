import resendClient from "./resendClient";

const contactEmail = async ({ name, email, message }) => {
    if (!process.env.FROM_EMAIL || !process.env.CONTACT_EMAIL) {
        throw new Error("Missing FROM_EMAIL or CONTACT_EMAIL environment variable");
    }

    const emailHTML = `
        <div>
            <h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
    `;

    try {
        const response = await resendClient.emails.send({
            from: `Memory Mate <${process.env.FROM_EMAIL}>`,
            to: process.env.CONTACT_EMAIL,
            subject: "New Contact Form Submission",
            html: emailHTML,
            reply_to: email,
        });

        if (response.error) {
            throw new Error(`Resend API Error: ${response.error.message}`);
        }
        return response;
    }catch (error) {
        console.error("Error sending contact email:", error);
        throw new Error("Failed to send contact email. Please try again later.");
    }
    
};

export default contactEmail;