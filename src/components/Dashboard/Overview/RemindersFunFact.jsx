'use client'
import * as React from "react"

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"

const RemindersFunFact = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    )

    const funFacts = [
        {
            fact: `A nudge, a note, a gentle say,<br/>
            Reminders keep the chaos away!`
        },
        {
            fact: `Dates to mark and moments to cheer,<br/>
            A reminder’s whisper is always near.`
        },
        {
            fact: `A friend for dates you must not miss,<br/>
            Reminders bring a touch of bliss.`
        },
        {
            fact: `A tiny ping, a little rhyme,<br/>
            Reminders help you master time!`
        },
        {
            fact: `No forgotten birthdays, no missed delight,<br/>
            Reminders make your moments bright!`
        },
    ]
    return (
        <div className="mt-[-3px]">
            <Carousel
                opts={{
                    align: "start",
                }}
                plugins={[plugin.current]}
                orientation="vertical"
                className="w-full max-w-xs"
            >
                <CarouselContent className="-mt-1 h-[200px]">
                    {funFacts.map((item, index) => (
                        <CarouselItem key={index} className="p-1">
                            <div className="p-1 h-full">
                                <Card className="h-full">
                                    <CardContent className="flex items-center justify-center p-6 h-full">
                                        <p 
                                        className="text-xl font-semibold fun-fact-text"
                                        dangerouslySetInnerHTML={{ __html: item.fact }}>
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default RemindersFunFact;