function Cell(i, j, w) {

    this.revealed = false;
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.neighborCount = 0;
}

Cell.prototype.show = function() {
    noFill(); //without this, all squares fill(155);
    rect(this.x, this.y, this.w, this.w);

    if (this.revealed) {
        if (this.bee) {
            fill(155);
            ellipse(this.x + (this.w/2), this.y +(this.w/2), this.w * 0.5);
        } else {
            fill(210);
            rect(this.x, this.y, this.w, this.w);

            if (this.countBees > 0) {
            textAlign(CENTER);
            stroke(6);
            textSize(16);
            fill((55 + cos(frameCount*0.05) * 180), 55, 55);
            text(this.countBees, this.x + (this.w / 2), this.y + (this.w / 2) + 5)
            }
        }
    }
}

Cell.prototype.countBees = function () {
    if (this.bee) {
        this.neighborCount = -1;
        return;
    }
    let total = 0;
    for (let xoff = -1; xoff <= 1; xoff++) {
        for (let yoff = -1; yoff <= 1; yoff++) {
            let i = this.i + xoff;
            let j = this.j + yoff;
            if (i > -1 && i < cols && j > -1 && j < rows) {

            var neighbor = grid[i][j];
            if (neighbor.bee) {
                total++;
            }
        }

        }
    }
    this.countBees = total;
    // console.log(total);
}


Cell.prototype.contains = function(x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
    this.revealed = true;
    console.log(this.countBees);
    if (this.countBees == 0) {
        //flood fill algorithm
        this.floodFill();
    }
}

Cell.prototype.floodFill = function() {
    for (let xoff = -1; xoff <= 1; xoff++) {
        for (let yoff = -1; yoff <= 1; yoff++) {
            let i = this.i + xoff;
            let j = this.j + yoff;
            if (i > -1 && i < cols && j > -1 && j < rows) {
                var neighbor = grid[i][j];
                if (!neighbor.bee && !neighbor.revealed) {
                    neighbor.reveal(); 
                }
            }
        } 
    }
}