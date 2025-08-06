import ContactPageForm from "@/components/Contact/ContactPageForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Contact Us - Memory Mate | Get in Touch",
  description: "Contact Memory Mate support team. Get help with your reminder app, report issues, or share feedback. We're here to help you never miss important dates.",
  keywords: ['contact', 'support', 'help', 'memory mate contact', 'customer service', 'feedback'],
  openGraph: {
    title: "Contact Us - Memory Mate | Get in Touch",
    description: "Contact Memory Mate support team. Get help with your reminder app, report issues, or share feedback. We're here to help you never miss important dates.",
    url: 'https://mate.fabbythemes.com/contact',
    type: 'website',
  },
};

const Contact = () => {
    return (
        <div>
            <Header />
            <ContactPageForm />
            <Footer />
        </div>
    );
};

export default Contact;