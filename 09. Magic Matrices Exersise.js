function solve(matrix) {
    let rowSum = 0;
    let colSum = 0;
    let oldSum = 0;

    for (let i = 0; i < matrix[0].length; i++) {
        rowSum = matrix[i].reduce((a,b)=>a+b);
        if ( i>0 && colSum !== rowSum) {
            return false;
        }

        let sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            sum += matrix[j][i];             
        }
        colSum = sum;
        if (colSum !== rowSum) {
            return false;
        }
        oldSum = colSum;


    }
    return true
}

console.log(solve([
    [4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]]));
