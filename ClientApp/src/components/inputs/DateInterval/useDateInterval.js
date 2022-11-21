import { useState, useEffect } from 'react';

const useDateInterval = () => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    useEffect(() => {
        console.log('date1: ' + date1.toString());
        console.log('date2: ' + date2.toString());
    });

    const moveDate1 = (date1) => {
        if (date1 > date2) {
            setDate2(date1);
            console.log('alert');
        }
        setDate1(date1);
    };

    const moveDate2 = (date2) => {
        if (date2 < date1) {
            setDate1(date2);
        }
        setDate2(date2);
    };

    const getInterval = () => date2 - date1;

    return {
        date1,
        date2,
        moveDate1,
        moveDate2,
        getInterval
    };
};

export default useDateInterval;