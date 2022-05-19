function radar(speed, zone) {
    if (zone == "motorway") { 
        if (speed <= 130) {
            console.log(`Driving ${speed} km/h in a 130 zone`)
        }
        else if (130 < speed && speed <= 150) {
            console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - speeding`)
        }
        else if (150 < speed && speed <= 170) {
            console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - excessive speeding`)
        }
        else if (speed > 170) {
            console.log(`The speed is ${speed - 130} km/h faster than the allowed speed of 130 - reckless speeding`)
        }
    }
    else if (zone == "interstate") { 
        if (speed <= 90) {
            console.log(`Driving ${speed} km/h in a 90 zone`)
        }
        else if (90 < speed && speed <= 110) {
            console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - speeding`)
        }
        else if (110 < speed && speed <= 130) {
            console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - excessive speeding`)
        }
        else if (speed > 130) {
            console.log(`The speed is ${speed - 90} km/h faster than the allowed speed of 90 - reckless speeding`)
        }
    }
    else if (zone == "city") { 
        if (speed <= 50) {
            console.log(`Driving ${speed} km/h in a 50 zone`)
        }
        else if (50 < speed && speed <= 70) {
            console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - speeding`)
        }
        else if (70 < speed && speed <= 90) {
            console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - excessive speeding`)
        }
        else if (speed > 90) {
            console.log(`The speed is ${speed - 50} km/h faster than the allowed speed of 50 - reckless speeding`)
        }
    }

    else if (zone == 'residential') { 
        if (speed <= 20) {
            console.log(`Driving ${speed} km/h in a 20 zone`)
        }
        else if (20 < speed && speed <= 40) {
            console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - speeding`)
        }
        else if (40 < speed && speed <= 60) {
            console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - excessive speeding`)
        }
        else if (speed > 60) {
            console.log(`The speed is ${speed - 20} km/h faster than the allowed speed of 20 - reckless speeding`)
        }
    }
    
}

radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')