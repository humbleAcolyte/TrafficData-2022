import { useEffect, useState } from 'react';
import { addInterval } from '../../utils/time/timeCalc';
import { getDirections, avrgSpeedDirections } from '../../services/chart/directions';

const dirColors = [
    'hsl(92, 70%, 50%)',
    'hsl(45, 70%, 50%)',
    'hsl(32, 70%, 50%)'
];

const useAvrgSpeedChart = (props) => {
    const getDirectionsHandler = getDirections;
    const getSpeedDataHandler = (params) => JSON.parse(avrgSpeedDirections(JSON.stringify(params)));

    let directions = getDirectionsHandler();
    let directionKey = 'id';
    let directionName = 'direction';

    let startDate = initStartDate();
    let endDate = initEndDate(startDate);

    let hours = 1;
    let minutes = 0;
    let seconds = 0;

    const speedData = [];
    const [formatSpeedData, setFormatSpeedData] = useState(speedData);

    function initStartDate() {
        const date = new Date();
        date.setSeconds(0, 0);
        return date;
    } 

    function initEndDate(date1) {
        const date = new Date();
        date.setTime(date1.getTime() + (2*3600*1000));
        return date;
    }

    function changeSettings(settings) {
        const speedData = getSpeedDataHandler(settings);
        const pointCount = speedData[0]['data'].length; // Лучше расчитывать количество точек иначе

        hours = settings.partition.hours;
        minutes = settings.partition.minutes;
        seconds = settings.partition.seconds;

        startDate = settings.startDate;
        endDate = settings.endDate;

        const formatTime = getFormatTimeArray(pointCount);

        let colorInd = 0;
        const newFormatData = speedData.map((dir) => {
            return {
                id: directions.find((direction) => direction[directionKey] === dir['directionId'])[directionName],
                color: dirColors[colorInd],
                data: getFormatSpeedData(dir['data'], pointCount, formatTime)
            };
        });
        setFormatSpeedData(newFormatData);
    }

    function getFormatSpeedData(data, pointCount, formatTime) {
        const formats = new Array(pointCount);
        for (let i = 0; i < pointCount; i++) {
            formats[i] = {
                x: formatTime[i],
                y: data[i]
            };
        }
        return formats;
    }

    function getFormatTimeArray(count) {
        let time = {
            h: startDate.getHours(),
            m: startDate.getMinutes(),
            s: startDate.getSeconds()
        };

        const partition = {
            h: hours,
            m: minutes,
            s: seconds
        };

        let array = new Array(count);
        for (let i = 0; i < count; i++) {
            array[i] = getFormatTime(time);
            time = addInterval(time, partition);
        }

        return array;
    }

    function getFormatTime(time) {
        const hours = ('00' + time.h).slice(-2);
        const minutes = ('00' + time.m).slice(-2);
        const seconds = ('00' + time.s).slice(-2);

        return hours + ':' + minutes + ':' + seconds;
    }

    return {
        data: formatSpeedData,
        values: {
            startDate,
            endDate,
            hours,
            minutes,
            seconds
        },
        directions,
        directionKey,
        directionName,
        changeSettings
    };
};

export default useAvrgSpeedChart;