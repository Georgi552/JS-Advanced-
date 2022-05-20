function solve(ints) { 
    let sorted = ints.sort((a,b)=> a-b);
    let result = [];

    result.push(ints[0])
    result.push(ints[1])
    console.log(result.join(" "))
}

solve([30, 15, 50, 5]);