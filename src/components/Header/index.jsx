import React from 'react';
import GeneralNavMenu from '../NavMenu/GeneralNavMenu';
import UserMenu from '../UserMenu';
import MobileNavigation from './MobileNavigation';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='py-[25px]'>
            <div className='container mx-auto hidden md:block'>
                <div className="flex gap-5 items-center">
                    <div className='w-3/12 flex justify-start'>
                        <div className="logo">
                            <Link href="/">
                                <h3 className="text-xl font-bold"><span className="brand-bg px-[8px] pb-[6px] pt-[3px] rounded text-white">Memory</span> Mate</h3>
                            </Link>
                        </div>
                    </div>
                    <div className='w-6/12 flex justify-center'>
                        <GeneralNavMenu />
                    </div>
                    <div className='w-3/12 flex justify-end'>
                        <UserMenu />
                    </div>
                </div>
            </div>
            <div className='container mx-auto md:hidden'>
                <div className="flex gap-5 items-center px-2">
                    <div className='w-7/12 flex justify-start'>
                        <div className="logo">
                            <h3 className="text-xl font-bold"><span className="brand-bg px-[8px] pb-[6px] pt-[3px] rounded text-white">Memory</span> Mate</h3>
                        </div>
                    </div>
                    <div className='w-5/12 flex justify-end'>
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;