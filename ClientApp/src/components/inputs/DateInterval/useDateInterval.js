import { useState, useEffect } from 'react';

const useDateInterval = (props) => {
    const [date1, setDate1] = useState(props.date1);
    const [date2, setDate2] = useState(props.date2);

    const changeHandler = props.onChange;

    useEffect(() => changeHandler(date1, date2));

    const moveDate1 = (date1) => {
        if (date1 > date2) {
            setDate2(date1);
        }
        setDate1(date1);
    };

    const moveDate2 = (date2) => {
        if (date2 < date1) {
            setDate1(date2);
        }
        setDate2(date2);
    };

    return {
        date1,
        date2,
        moveDate1,
        moveDate2
    };
};

export default useDateInterval;