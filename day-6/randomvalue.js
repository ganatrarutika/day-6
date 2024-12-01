function initialize() {
    let array = [];
    
    for (let i = 0; i < 3; i++) {
        let row = [];
        
        for (let j = 0; j < 3; j++) {
            row.push(Math.floor(Math.random() * 100) + 1); 
        }
        array.push(row);
    }
    
    return array;
}

let matrix = initialize();
console.log(matrix);
