 /*
    Your Name; Karina Valdes
    Completion date;
    Basic description of the image; A sail boat moving accross the ocean
    Basic description of user interactions to expect; Press the mouse to stop the boat anywhere on the screen
    Citations of any code sources used for reference;
    */

// Global Variables go here
 x = 50; // Initial x-coordinate of the boat
 y = 100; // Initial y-coordinate of the boat
isBoatMoving = true; // Variable to control boat movement

function setup() {
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  //translate (x,y);
}

function draw() {
  // this function runs again and again (60x per second)
  //background(200); // light gray background

  // add your image drawing code here

  background(173, 216, 230); // Light blue background


  // Ocean
  fill(30, 144, 255); // blue
  rect(0, 250, 600, 150); // Ocean
  fill('yellow')
  ellipse(width/2, height/2, 50)

  push(); // boat layer
  translate(x, y);
  // Boat
  fill(139, 69, 19); // brown
  rect(0, 100, 100, 50); // Boat 

  // Sail
  fill(255); // White
  triangle(50, 0, 50, 100, 150, 50); // Sail

  // Mast
  fill(139, 69, 19); // brown
  rect(45, 0, 10, 100); // Mast

  //ellipse(0, 0, 5)
  pop();

  // Move the boat to the right 
  if (isBoatMoving) {
    x += 2;

    // Reset boat position when it goes off the right edge
    if (x > width) {
      x = -100; // Move the boat to the left off-screen
    }
  }

  /* 
    Use the following if()...else() structure to incorporate mouse click control of your animation
  */
    if (mouseIsPressed) {
      isBoatMoving = false; // Stop the boat when the mouse is pressed
    } else {
      isBoatMoving = true; // Resume the boat's movement when the mouse is NOT pressed
    }
  }
  
  /** 
   * the mousePressed() function is separate from draw(). 
   * It only runs (one time) if the mouse is clicked
  */
  function mousePressed() {
    // add code here if you want something to execute once each time the mouse is pressed
  }
  