import { SignIn } from '@clerk/nextjs'

export const metadata = {
  title: "Login - Memory Mate | Sign In to Your Reminder App",
  description: "Sign in to Memory Mate and access your personalized reminder dashboard. Manage birthdays, anniversaries, and special events with ease.",
  keywords: ['login', 'sign in', 'memory mate login', 'reminder app login', 'dashboard access'],
  openGraph: {
    title: "Login - Memory Mate | Sign In to Your Reminder App",
    description: "Sign in to Memory Mate and access your personalized reminder dashboard. Manage birthdays, anniversaries, and special events with ease.",
    url: 'https://mate.fabbythemes.com/login',
    type: 'website',
  },
};

const Login = () => {
    return (
        <div>
            <section className="flex justify-center items-center h-[calc(100vh-56px)]">
                <SignIn routing='hash' />
            </section>
        </div>
    );
};

export default Login;