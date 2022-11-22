import { useState } from 'react';

const useGraphicBuild = (props) => {
    let intervalDate1 = props.interDate1;
    let intervalDate2 = props.interDate2;

    let timeHours = props.partHours;
    let timeMinutes = props.partMinutes;
    let timeSeconds = props.partSeconds;

    let allDirections = props.directions;
    let keyDirection = props.directionKey;
    let nameDirection = props.directionName;
    let actDirections = props.directionsKeys;

    function setDates(date1, date2) {
        intervalDate1 = date1;
        intervalDate2 = date2;
    }

    function setTime(hours, minutes, seconds) {
        timeHours = hours;
        timeMinutes = minutes;
        timeSeconds = seconds;
    }

    function setDirections(directions) {
        actDirections = directions;
    }

    function sendData() {
        const data = {
            date1: intervalDate1,
            date2: intervalDate2
        };
        console.log(data.date1);
    }

    return {
        values: {
            date1: intervalDate1,
            date2: intervalDate2,
            partHours: timeHours,
            partMinutes: timeMinutes,
            partSeconds: timeSeconds,
            dirData: allDirections,
            dirKey: keyDirection,
            dirName: nameDirection,
            dirValue: actDirections
        },
        setDates,
        setTime,
        setDirections,
        sendData
    };
};

export default useGraphicBuild;