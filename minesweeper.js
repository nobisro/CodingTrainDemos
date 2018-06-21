 // Minesweeper, Coding Train Challenge #71
 
function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}



let grid;
let cols;
let rows;
let totalBees = 12;

// let cols = Math.floor(window.innerWidth / w);
// let rows = Math.floor(window.innerHeight / w);
let w = 40;

 function setup() {
    createCanvas(401, 401);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i ++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }
    
    //Pick totalBees spots
    let options = [];
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            options.push([i, j]);
        }
    }
    console.log(options.length);



    for (let n = 0; n < totalBees; n++) {
       let index = floor(random(options.length));
       let choice = options[index];
       let i = choice[0];
       let j = choice[1];
       grid[i][j].bee = true;
       options.splice(index, 1);
}   


    for (let i = 0; i < cols; i ++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].countBees();
        }
    }





 }

function gameOver() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].reveal();
        }
    }
}


 function mousePressed() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
           if (grid[i][j].contains(mouseX, mouseY)) {
               grid[i][j].reveal();

               if (grid[i][j].bee) {
                   gameOver();
               }
           }
        }
    }
 }
 

 function draw() {
    background(255);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
 }