//Drawing Machine

var angle = 0.0;

function setup() {
    createCanvas(900, 700);
    background(0);
}


function draw() {

//The orange circles
    if (mouseIsPressed == false) {
        fill(255,153,0);
        rotate(angle);
        angle += 100;
        ellipse(mouseX +25, mouseY +25, height / 20, height / 20);

//the blue
        fill(0, 0, 255);
        rotate(angle);
        angle += 100;
        ellipse(mouseX, 5, 40, 40);
//The light blue
        fill(0, 255, 255);
        rotate(angle);
        angle += 0.01;
        ellipse(mouseX, mouseY, 20, 20);

// The else
    } else {

      //orange
      fill(255,153,0,40);
      rotate(angle);
      angle -= 0.30;
      rect(mouseX +25, mouseY +25, 70, 70);

      //the blue
      fill(0, 0, 255,20);
      rotate(angle);
      angle -= 100;
      ellipse(mouseX, 5, 40, 40);
      //The light blue
      fill(0, 255, 255,85);
      rotate(angle);
      angle -= 0.01;
      ellipse(mouseX, mouseY, 20, 20);
    }
}
