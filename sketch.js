var w = window.innerWidth;
var h = window.innerHeight;

let offset;
let scalar;
let angle;
let speed;

let img1;
let img2;
let img3;
let img4;


let currentImageIndex = 0;
let totalImages = 4; 
let currentImageNumber = 1;

function setup() {

  const canvas = createCanvas(w, h);
  img1 = loadImage('./public/output-onlinegiftools.gif');
  img2 = loadImage('./public//FLUX 1.jpg');
  img3 = loadImage('./public/RENDER.png');
  img4 = loadImage('./public/LOGO1.png');
  background(0);
  offset = 0.5;
  scalar = 180;
  angle = 0;
  speed = 0.0009;

  canvas.mouseClicked(() => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    currentImageNumber = currentImageIndex + 1;
  });

}

function draw() {

  background(0);
  fill('#ffffff');
  textAlign(LEFT, BOTTOM);
  textSize(40);
  text(`Click Me: ${currentImageNumber}/${totalImages}`, mouseX, mouseY);

  translate(width/2, height/2);

  var z = 0;
  rotate(radians(z));

  var x = 0.01;

  for (var i = 5; i < height; i += 50) {
    var y1 = offset + cos(angle) * scalar;
    rotate(radians(y1));
    if (currentImageIndex === 0) {
      image(img1, 0, 0, mouseX * 0.3, mouseY * 0.3);
    } else if (currentImageIndex === 1) {
      image(img2, 0, 0, mouseX * 0.3, mouseY * 0.3);
    } else if (currentImageIndex === 2) {
      image(img3, 0, 0, mouseX * 0.3, mouseY * 0.3);
    } else if (currentImageIndex === 3) {
      image(img4, 0, 0, mouseX * 0.3, mouseY * 0.3);
    }
    x += 0.1;
  }
  
  angle += speed;
  z++;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

