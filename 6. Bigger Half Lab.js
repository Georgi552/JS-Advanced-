function solve(ints) { 
    let sorted = ints.sort((a,b)=> a-b);
 
    let tobeRemoved = Math.floor(ints.length/2)
    for (let i = 0; i < tobeRemoved; i ++ ) { 
        sorted.shift()
    }
    return sorted;
}

console.log(solve([3, 19, 14, 7, 2, 159, 6]));