let d = 8;
let n = 5;
var sliderN;
var sliderD;

function setup() {
    createCanvas(400, 400);
    sliderN = createSlider(1, 10, 5, 0.01);
    sliderD = createSlider(1, 10, 5, 0.01);
}

function draw() {
    n = sliderN.value();
    d = sliderD.value();
    k = n / d;
    background(51);
    translate(width / 2, height / 2);

    beginShape();
    stroke(255, 100, 150);
    noFill();
    // fill(255, 100, 150);
    strokeWeight(1);
    for (let a = 0; a < TWO_PI * 8; a+= 0.02) {
        let r = 200 * cos(k * a);
        let x = r * cos(a);
        let y = r * sin(a);
        stroke(255);
        strokeWeight(4);
        vertex(x, y);
    }
    endShape(CLOSE);


}