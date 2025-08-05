import Link from 'next/link';
import AnimatedHeading from './AnimatedHeading';
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

const HomeHero = () => {
    const keyphrases = ["Never Forget a Birthday...",
        "Anniversaries? You're Covered!",
        "Meetings and Special Events? Always on Time!",
        "Memory Mate - Your Personal Reminder App!"
    ]

    return (
        <section className="py-[90px] min-h-[calc(100vh-174px)] flex items-center">
            <div className="container mx-auto">
                <div>
                    <div>
                        <h1 className="lg:text-[48px] text-[34px] dark-text text-center leading-normal">
                            Set the Date, Make It Great!
                            <br />
                            <AnimatedHeading keyphrases={keyphrases} />
                        </h1>
                    </div>
                    <div>
                        <p className="text-base tajawal md:text-lg text-muted-foreground w-full md:w-8/12 lg:w-5/12 mx-auto text-center mt-3">
                            With Memory Mate, never miss a birthday, anniversary, or important day again. Get timely reminders for all your special events!
                        </p>
                    </div>
                    <div className="text-center mt-7">
                        <Link className="brand-bg rounded-[50px] px-10 py-4 flex items-center gap-3 text-white text-base md:text-lg font-semibold w-fit mx-auto btn-effect-one" href="/dashboard">
                            <span>Set Your Reminders!</span>
                            <span>
                                <TbCircleArrowUpRightFilled size={26} />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;