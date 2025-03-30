import { Button } from '@/components/ui/button';
import { BellRing, ChartNoAxesCombined, Plus } from 'lucide-react';
import React from 'react';
import ThemeToggle from '../ThemeToggle';
import Link from 'next/link';

const DashboardQuickActions = () => {
    return (
        <section className='pb-16'>
            <div className='flex items-center justify-between gap-3 flex-wrap'>
                <div className='flex items-center justify-start gap-3 flex-wrap'>
                    <Link href='/dashboard/reminders/create'>
                        <Button variant='outline'>
                            Create <Plus />
                        </Button>
                    </Link>
                    <Link href='/dashboard/analytics'>
                        <Button variant='secondary'>
                            Analytics <ChartNoAxesCombined />
                        </Button>
                    </Link>
                </div>
                <div className='flex items-center justify-start gap-3 flex-wrap'>
                    <Link href='/dashboard/reminders'>
                        <Button>
                            Reminders <BellRing />
                        </Button>
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </section>
    );
};

export default DashboardQuickActions;