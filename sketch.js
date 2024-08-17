function setup() {
    createCanvas(600, 600);
    background("black")
  }
  
  function draw() {
    stroke("purple")
    fill("white")
    
    if(mouseIsPressed){
      circle(mouseX, mouseY, 20, 30);
    }
  }