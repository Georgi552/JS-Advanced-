function solve(arr) {
    const length = arr.length
    
    let result = [];
    for (i = 0; i < length/2; i++){
        arr.sort((a,b)=>a-b);
        let smallest = arr.shift();
        result.push(smallest);

        arr.sort((a,b)=>b-a);
        let biggest = arr.shift();
        result.push(biggest);
        
    }
    return result
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));