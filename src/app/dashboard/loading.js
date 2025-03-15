"use client";
import { Bars } from 'react-loader-spinner';

const DashboardLoader = () => {
    return (
        <div>
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{ width: "100%", textAlign: "center" }}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default DashboardLoader;