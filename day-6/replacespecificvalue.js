let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function replaceValue(matrix, oldValue, newValue) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] === oldValue) {
                matrix[i][j] = newValue;
            }
        }
    }
    return matrix;
}

let output = replaceValue(input, 5, 50);
console.log(output);
