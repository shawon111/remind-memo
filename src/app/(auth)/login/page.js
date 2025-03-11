import { SignIn } from '@clerk/nextjs'

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