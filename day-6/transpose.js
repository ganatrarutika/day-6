let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let transposed = [];

    for (let i = 0; i < cols; i++) {
        transposed[i] = [];
        for (let j = 0; j < rows; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }

    return transposed;
}

let output = transpose(input);
console.log(output);
