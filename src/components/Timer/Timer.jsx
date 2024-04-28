import React, { useEffect, useState } from "react";

const Timer = ({deadline}) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        const totalHours = Math.floor(time / (1000 * 60 * 60));
        setHours(totalHours);
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            {hours}h {minutes < 10 ? '0' + minutes : minutes}m {hours > 24 ? "" :(seconds < 10 ? '0' + seconds + 's ': seconds + 's')}
        </div>
    );
}

export default Timer;
