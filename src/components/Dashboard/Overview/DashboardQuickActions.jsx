import { Button } from '@/components/ui/button';
import { ChartNoAxesCombined, LayoutPanelTop, Plus } from 'lucide-react';
import React from 'react';

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
                <div>
                    <Button>
                        Templates <LayoutPanelTop />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default DashboardQuickActions;