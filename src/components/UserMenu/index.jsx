import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

const UserMenu = async() => {
    const user = await currentUser();
    return (
        <div>
            <div>
                {
                    user ? <Link className="p-0 brand-bg flex justify-center items-center h-[40px] w-[140px] rounded-[50px] btn-effect-one" href="/dashboard">
                        <span className="text-sm uppercase text-white font-semibold">Dashboard</span>
                    </Link> : <Link className="p-0 brand-bg flex justify-center items-center h-[40px] w-[140px] rounded-[50px] btn-effect-one" href="/login">
                        <span className="text-sm uppercase text-white font-semibold">Login</span>
                    </Link>
                }
            </div>
        </div>
    );
};

export default UserMenu;