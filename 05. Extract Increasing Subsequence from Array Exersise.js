function solve(arr) {
    let result = [];
    let lastNum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= lastNum){
            result.push(arr[i]);
            lastNum = arr[i];
        }
    }

    return(result);
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));