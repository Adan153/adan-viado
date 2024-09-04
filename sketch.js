function setup() {
  createCanvas(400, 400);
  background("yellow")
}

function draw() {
  if (mouseIsPressed){
  stroke ("rgb(243,0,0)");
  fill("39,22,139");
    rect(mouseX,mouseY,20,20);
}
}
  
