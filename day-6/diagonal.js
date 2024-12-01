let input = [
    [5, 1, 2, 3],
    [4, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

function updateDiagonal(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][i] = 0; 
    }
    return matrix;
}

let output = updateDiagonal(input);
console.log(output);
