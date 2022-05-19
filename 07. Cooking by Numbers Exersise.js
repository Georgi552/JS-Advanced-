function solve(num, act1, act2, act3, act4, act5) { 
    let numInt = parseInt(num);

    let actionsList = [act1, act2, act3, act4, act5];
    
    
    for (const el of actionsList) { 
        if (el == "chop") {
            numInt = numInt / 2
            console.log( numInt)
        }
        else if (el == "dice") {
            numInt = Math.sqrt(numInt)
            console.log(numInt)
        }
        else if (el == "spice") {
            numInt += 1
            console.log(numInt)
        }
        else if (el == "bake") {
            numInt *= 3
            console.log(numInt)
        }
        else if (el == "fillet") {
            numInt = (numInt * 0.8).toFixed(1)
            console.log(numInt)
        }
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake',

'fillet')