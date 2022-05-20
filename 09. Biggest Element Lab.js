function biggest(matrix) {
    let result = Number.MIN_SAFE_INTEGER;
    for (let el of matrix) {
        for (let k of el) { 
            if (k > result) { 
                result = k
            }
        }
    }
    return result
}

console.log(biggest([[20, 40], [10, 60]]))