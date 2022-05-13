function printLargest(param1, param2, param3) {
    let max = Number.MIN_SAFE_INTEGER;
    if (param1 > max) {
        max = param1;
    }
    else if (param2 > max) {
        max = param2;
    }
    else if (param3 > max) {
        max = param3;
    }
    console.log(max);
    
}

printLargest(-3, -5, -22.5);