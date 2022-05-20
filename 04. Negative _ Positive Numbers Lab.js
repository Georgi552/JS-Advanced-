function solve(ints) { 
    let result = [];
    for (let el of ints) {
        if (el < 0) { 
            result.unshift(el)
        }
        else if (el >= 0) {
            result.push(el)
        }
    }
    console.log(result.join("\n"))
}

solve([7, -2, 8, 9]);