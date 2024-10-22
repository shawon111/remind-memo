import Link from "next/link";
import { Button } from "../ui/button";

const UserMenu = () => {
    const isLoggedIn = true;
    return (
        <div>
            <div>
                {
                    isLoggedIn ? <Link href="/dashboard">
                        <Button>Dashboard</Button>
                    </Link> : <Link href="/login">
                        <Button>SignUp/SignIn</Button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default UserMenu;