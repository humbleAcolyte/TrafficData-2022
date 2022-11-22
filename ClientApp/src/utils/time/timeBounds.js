function bounds(lBound, rBound) {
    return (time) => {
        if (time < lBound) {
            return lBound;
        }
    
        if (time > rBound) {
            return rBound;
        }
    
        return time;
    }
}

const hoursBounds = bounds(0, 23); 
const minutesBounds = bounds(0, 59); 
const secondsBounds = bounds(0, 59); 

export {
    hoursBounds,
    minutesBounds,
    secondsBounds
};