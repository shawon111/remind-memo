import { Button } from '@/components/ui/button';
import { BellRing, ChartNoAxesCombined, Plus } from 'lucide-react';
import React from 'react';
import ThemeToggle from '../ThemeToggle';

const DashboardQuickActions = () => {
    return (
        <section className='pb-16'>
            <div className='flex items-center justify-between gap-3 flex-wrap'>
                <div className='flex items-center justify-start gap-3 flex-wrap'>
                    <Button variant='outline'>
                        Create <Plus />
                    </Button>
                    <Button variant='secondary'>
                        Analytics <ChartNoAxesCombined />
                    </Button>
                </div>
                <div className='flex items-center justify-start gap-3 flex-wrap'>
                    <Button>
                        Reminders <BellRing />
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </section>
    );
};

export default DashboardQuickActions;