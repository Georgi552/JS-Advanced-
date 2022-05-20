function solve(strings) { 
    let first = parseInt(strings.shift())
    let last = parseInt(strings.pop())
    let result = first + last
    console.log(result) 
}

solve(['20', '30', '40']);