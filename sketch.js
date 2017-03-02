var angle = 0.0;




function setup() {
    createCanvas(1200, 700);
    background(0);
}






function draw() {

//The orange circles
    if (mouseIsPressed == false) {

        fill(255,153,0);
        rotate(angle);
        angle += 100;
        ellipse(mouseX / 2, mouseY / 2, height / 20, height / 20);


    } else {
        background(0);

    }


//The blue circles
    if (mouseIsPressed == false) {

        fill(0, 0, 255);
        rotate(angle);
        angle += 100;
        ellipse(mouseX, 5, 40, 40);


    } else {
        background(0);
    }



//The light blue circles
    if (mouseIsPressed == false) {

        fill(0, 255, 255);
        rotate(angle);
        angle += 0.01;
        ellipse(mouseX, mouseY, 10, 10);



    } else {
        background(0);
    }







}
