const useAvrgSpeedChartSettings = (props) => {
    let startDate = props.defaultStartDate;
    let endDate = props.defaultEndDate;

    let hours = props.defaultHours;
    let minutes = props.defaultMinutes;
    let seconds = props.defaultSeconds;

    let directions = props.directions;
    let dirKey = props.directionKey;
    let dirName = props.directionName;
    let dirAct = props.defaultDirections.map((key) => findDirectionByKey(key));

    const submitHandler = props.onSubmit;

    function setDates(date1, date2) {
        startDate = date1;
        endDate = date2;
    }

    function setTime(h, m, s) {
        hours = h;
        minutes = m;
        seconds = s;
    }

    function setDirections(dirs) {
        dirAct = dirs;
    }

    function findDirectionByKey(key) {
        const direction = directions.find((dir) => dir[dirKey] === key);
        return direction;
    } 

    function build() {
        const data = packageParams();
        submitHandler(data);
    }

    function packageParams() {
        const data = {
            startDate,
            endDate,
            partition: {
                hours,
                minutes,
                seconds
            },
            directions: dirAct.map((direction) => direction[dirKey])
        };

        return data;
    }

    return {
        date: {
            startDate,
            endDate,
            setDates
        },
        partition: {
            hours,
            minutes,
            seconds,
            setTime
        },
        direction: {
            directions,
            dirKey,
            dirName,
            dirAct,
            setDirections
        },
        build
    };
};

export default useAvrgSpeedChartSettings;