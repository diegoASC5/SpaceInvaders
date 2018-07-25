function setup() {//Diego
    createCanvas(600, 600);
    background(51);
    textSize(16);
    text('Font Size 16', 10, 90);    
}
let moving = false;
 let x = 0;
 let moveRight = true; 
 function draw() {
     background(51);
     ellipse(50,50,50,50);
     ellipse(150,50,50,50);
     ellipse(250,50,50,50);
     ellipse(350,50,50,50);
     ellipse(450,50,50,50);
     ellipse(550,50,50,50);
     ellipse(50,150,50,50);
     ellipse(150,150,50,50);
     ellipse(250,150,50,50);
     ellipse(350,150,50,50);
     ellipse(450,150,50,50);
     ellipse(550,150,50,50);
     if (moveRight) {
         x++;
     }else {
         x--;
     }
     if (x == 600) {
         moveRight = false;
         x--;
     }
     if (x == 50) {
        moveRight = true;
        x++;
     }

    


     if (keyIsDown(LEFT_ARROW)&& x > 2) {
      x -= 4;
     }
     rect(x, 490 , 10, 50);
     fill("red");
     if (keyIsDown(RIGHT_ARROW)&& x < 580) {
      x += 4;
     }

    }
   if (moving == true) {


   }
  function keyPressed() {
  if(keyCode === UP_ARROW) {
    moving = true
}
}
