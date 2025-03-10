import ThemeToggle from '@/components/Dashboard/ThemeToggle';

const AuthNav = () => {
    return (
        <section className='pt-[20px]'>
            <div className='container mx-auto px-3 md:px-0'>
                <div className='flex items-center justify-between gap-3 flex-wrap'>
                    <div className='flex items-center justify-start'>
                        <h3 className="text-xl font-bold dark:text-white text-start">
                            <span className="brand-bg px-[8px] pb-[6px] pt-[3px] rounded text-white">Memory</span> Mate
                        </h3>
                    </div>
                    <div className='flex items-center justify-start gap-3 flex-wrap'>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthNav;