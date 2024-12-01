let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function rowSums(matrix) {
    let sums = [];

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0; 
        
        for (let j = 0; j < matrix[i].length; j++) {
            rowSum += matrix[i][j]; 
        }
     
        sums.push(rowSum);
    }
  
    return sums;
}

let result = rowSums(matrix);
console.log(result);  
