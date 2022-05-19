function radar(speed, area) { 
    let motorwaySpeed = 130; 
    let interstateSpeed = 90;
    let citySpeed = 50;
    let residentialSpeed = 20;

    let speedZone = 0;
    let difference = 0
    let status;


    switch (area) { 
        case "motorway":
            speedZone = motorwaySpeed
            break;
        case 'interstate':
            speedZone = interstateSpeed
            break;
        case 'residential':
            speedZone = residentialSpeed
            break;
        case 'city':
            speedZone = citySpeed
            break;
        default:
            break;
    }

    if (speed > speedZone) { 
        difference = speed - speedZone;
        if (difference <= 20) { 
            status = "speeding"
        }
        else if (20 < difference && difference <= 40) { 
            status = "excessive speeding"
        }
        else { 
            status = "reckless driving"
        }
    }


    if (difference !=0 ){
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - ${status}`)
    }

    else { 
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`)
    }
}

radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')