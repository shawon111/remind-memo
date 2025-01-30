'use-client';

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const EventDatePicker = ({ setValue, watch }) => {
    const selectedDate = watch("event_date")

    const setDate = (date) => {
        setValue("event_date", date, { shouldValidate: true })
    }
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[100%] justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(new Date(selectedDate), "PPP") : "Select Date"}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        onSelect={(date) => setDate(date)}
                        initialFocus
                        selected={selectedDate}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default EventDatePicker;