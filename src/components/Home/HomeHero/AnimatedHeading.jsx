"use client"
import { ReactTyped } from "react-typed";

const AnimatedHeading = ({ keyphrases }) => {
    return (
        <span className="font-bold">
            <ReactTyped
                strings={keyphrases}
                typeSpeed={60}
                backSpeed={25}
                loop={true}
            />
        </span>
    );
};

export default AnimatedHeading;