"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

const ProcessSignUp = () => {
    const { user } = useUser();
    const router = useRouter();
    const [isUpdating, setIsUpdating] = useState(false);
    const BaseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const { toast } = useToast()

    const updateMetadata = async () => {
        try {
            setIsUpdating(true);
            const response = await fetch(`${BaseURL}/api/users/limit`, {
                method: "POST",
                body: JSON.stringify({ userId: user.id }),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                setIsUpdating(false);
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "Please try again by clicking the button",
                })
            }

            console.log("Private metadata updated.");
            router.push("/dashboard");
        } catch (err) {
            setIsUpdating(false);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Please try again by clicking the button",
            })
        } finally {
            setIsUpdating(false);
            toast({
                title: "Account Completed!",
            })
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {isUpdating && <p>Please wait while we finalize your account setup.</p>}
            <h2 className="text-4xl brand-text mb-[100px]">Finalize Your Account</h2>
            <button
                onClick={() => updateMetadata()}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                {
                    isUpdating ? "Finalizing..." : "Finalize Account"
                }
            </button>
        </div>
    );
};

export default ProcessSignUp;