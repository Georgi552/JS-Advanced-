function equalNeighbors(matrix) {

    let currentEl;
    let oldEl = 0;

    let counter = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        currentEl = undefined;
        for ( let k = 0; k < matrix.length; k++) {
            oldEl = currentEl;
            currentEl = matrix[k][i];
            if (currentEl == oldEl) { 
                counter += 1;
            }
        }        
    }
    for (let x = 0; x < matrix.length; x++) {
        currentEl = undefined;
        for (let y = 0; y < matrix[0].length; y++) { 
            oldEl = currentEl;
            currentEl = matrix[x][y];
            if (currentEl == oldEl) {
                counter += 1;
            }
        }
    }
    return counter 
}
console.log(equalNeighbors(
    [[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]));

console.log(equalNeighbors([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']]))

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'], 
['well', 'done', 'yo', '6'], 
['not', 'done', 'yet', '5']]))

