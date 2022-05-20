function diagonalSum(matrix) {
    let mainDiagonal = 0;
    let secondDiagonal = 0;
    let result = []

    for (let i = 0; i < matrix.length; i ++) { 
        mainDiagonal += matrix[i][i];
        secondDiagonal += matrix[matrix.length - i - 1][i];
    }
    result.push(mainDiagonal)
    result.push(secondDiagonal)
    console.log(result.join(" "))
 
}
diagonalSum([[20,40], [10, 60]])