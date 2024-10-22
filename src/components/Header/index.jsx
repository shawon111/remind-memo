import React from 'react';
import GeneralNavMenu from '../NavMenu/GeneralNavMenu';
import UserMenu from '../UserMenu';
import DashboardNavMenu from '../NavMenu/DashboardNavMenu';

const Header = () => {
    return (
        <header>
            <div>
                <div></div>
                <div>
                    {/* <GeneralNavMenu /> */}
                    <DashboardNavMenu />
                </div>
                <div>
                    <UserMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;