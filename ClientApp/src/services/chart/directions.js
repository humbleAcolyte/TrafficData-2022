const directions = [
    {id: 0, direction: 'Направление 1'},
    {id: 1, direction: 'Направление 2'},
    {id: 2, direction: 'Направление 3'}
];

const maxAvrgSpeed = 50;
const minAvrgSpeed = 0;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getDirections() {
    return directions;
}

function avrgSpeedDirections(paramsJson) {
    const params = JSON.parse(paramsJson);
    const startDate = new Date(params['startDate']);
    const endDate = new Date(params['endDate']);
    const intervalTime = (endDate - startDate) / 1000; // time interval in seconds
    const partition = params['partition']['hours'] * 3600 +
                    params['partition']['minutes'] * 60 + params['partition']['seconds']; // time partition in seconds
    const dotsCount = Math.floor(intervalTime / partition);
    const directions = params['directions'];

    const data = directions.map((direction) => {
        const dirDots = Array(dotsCount);
        for (let i = 0; i < dotsCount; i++) {
            dirDots[i] = Math.floor(getRandomArbitrary(minAvrgSpeed, maxAvrgSpeed));
        }
        return {
            directionId: direction,
            data: dirDots
        };
    });

    return JSON.stringify(data);
}

export { getDirections, avrgSpeedDirections };