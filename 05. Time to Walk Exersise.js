function timeToWalk(steps, step_legth, speedInKm_H) {
    let distance = steps * step_legth;
    let speedInMeter_S = speedInKm_H / 3.6;
    let time = distance / speedInMeter_S;
    let breaks = Math.trunc(distance / 500) * 60;
    let totalSeconds = breaks + time;

    let hous = (Math.trunc(totalSeconds / 3600));
    let mins = Math.trunc(totalSeconds % 3600 / 60);
    let secs = Math.trunc(totalSeconds % 60);
    return `${hous.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, "0")}`
    console.log(hous.pad(2), mins.toFixed(2), secs.toFixed(2));

    
}

console.log(timeToWalk(4000, 0.60, 5))

console.log(timeToWalk(2564, 0.70, 5.5))






