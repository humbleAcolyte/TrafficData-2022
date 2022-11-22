import { useEffect, useState } from 'react';
import { hoursBounds, minutesBounds, secondsBounds } from '../../../utils/time/timeBounds';

const useTimeSelector = (props) => {
    const [hours, setHours] = useState(props.hours);
    const [minutes, setMinutes] = useState(props.minutes);
    const [seconds, setSeconds] = useState(props.seconds);

    const changeHandler = props.onChange;

    const updHours = (hours) => setHours(hoursBounds(hours));
    const updMinutes = (minutes) => setMinutes(minutesBounds(minutes));
    const updSeconds = (seconds) => setSeconds(secondsBounds(seconds));

    useEffect(() => {
        changeHandler(hours, minutes, seconds);
    });

    return {
        hours,
        minutes,
        seconds,
        setHours: updHours,
        setMinutes: updMinutes,
        setSeconds: updSeconds
    };
};

export default useTimeSelector;