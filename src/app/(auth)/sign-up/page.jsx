import { SignUp } from "@clerk/nextjs";

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