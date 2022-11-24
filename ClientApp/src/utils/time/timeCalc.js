function addInterval(time, interval) {
    let h = time.h + interval.h;
    let m = time.m + interval.m;
    let s = time.s + interval.s;

    if (s >= 60) {
        s = s % 60;
        m++;
    }

    if (m >= 60) {
        m = m % 60;
        h++;
    }

    if (h >= 24) {
        h = h % 24;
    }

    return { h, m, s };
}

export { addInterval };