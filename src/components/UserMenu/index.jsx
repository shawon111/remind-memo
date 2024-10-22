import Link from "next/link";

const UserMenu = () => {
    const isLoggedIn = true;
    return (
        <div>
            <div>
                {
                    isLoggedIn ? <Link className="p-0 brand-bg hover:brightness-110 flex justify-center items-center h-[40px] w-[140px] rounded-[50px]" href="/dashboard">
                        <span className="text-sm uppercase text-white font-semibold">Dashboard</span>
                    </Link> : <Link className="p-0 brand-bg hover:brightness-110 flex justify-center items-center h-[40px] w-[140px] rounded-[50px]" href="/login">
                        <span className="text-sm uppercase text-white font-semibold">SignUp/SignIn</span>
                    </Link>
                }
            </div>
        </div>
    );
};

export default UserMenu;