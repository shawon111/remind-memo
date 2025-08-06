import { SignUp } from "@clerk/nextjs";

export const metadata = {
  title: "Sign Up - Memory Mate | Create Your Reminder Account",
  description: "Join Memory Mate today! Create your free account and start managing birthdays, anniversaries, and special events. Never miss important dates again.",
  keywords: ['sign up', 'register', 'create account', 'memory mate signup', 'reminder app registration', 'free account'],
  openGraph: {
    title: "Sign Up - Memory Mate | Create Your Reminder Account",
    description: "Join Memory Mate today! Create your free account and start managing birthdays, anniversaries, and special events. Never miss important dates again.",
    url: 'https://mate.fabbythemes.com/sign-up',
    type: 'website',
  },
};

const SignUpPage = () => {
    return (
        <div>
            <section className="flex justify-center items-center h-[calc(100vh-56px)]">
                <SignUp
                    routing='hash'
                />
            </section>
        </div>
    );
};

export default SignUpPage;