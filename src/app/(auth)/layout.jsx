import AuthNav from '@/components/NavMenu/AuthNav';
import { ThemeProvider } from '@/components/theme-provider';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <AuthNav />
                <div>
                    {children}
                </div>
            </ThemeProvider>
        </div>
    );
};

export default AuthLayout;