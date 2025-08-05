'use client'

import { useState } from "react";

const ContactPageForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");
        setError("");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to send message");
            }
            setSuccess("Your message has been sent!");
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setError("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-[85vh]">
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        className="border rounded px-3 py-2"
                        rows={5}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#45dfb1] text-white py-2 rounded font-semibold"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                    {success && <p className="text-green-600">{success}</p>}
                    {error && <p className="text-red-600">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactPageForm;