"use client";
import { Bars } from 'react-loader-spinner';

const ReminderLoader = () => {
    return (
        <div>
            <Bars
                height="80"
                width="80"
                color="#45dfb1"
                ariaLabel="bars-loading"
                wrapperStyle={{ width: "100%", textAlign: "center" }}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default ReminderLoader;