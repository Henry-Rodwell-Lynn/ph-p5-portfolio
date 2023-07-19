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

let myFont

let currentImageIndex = 0;
let totalImages = 10; 
let currentImageNumber = 1;

function setup() {

  const canvas = createCanvas(w, h);
  img1 = loadImage('./public/The data visualisatino of my idiosyncrasies_Page_12 (Small).png');
  img2 = loadImage('./public//FLUX 1.jpg');
  img3 = loadImage('./public/output-onlinegiftools.gif');
  img4 = loadImage('./public/LOGO1.png');
  img5 = loadImage('./public/output-onlinegiftools (1).gif');
  img6 = loadImage('./public/Baner Free Mockup.png');
  img7 = loadImage('./public/Baner Free Mockup (1).png');
  img8 = loadImage('./public/MP.png');
  img9 = loadImage('./public/v2-o.png');
  img10 = loadImage('./public/RENDER.png');


  background(0);
  offset = 0.5;
  scalar = 180;
  angle = 0;
  speed = 0.0009;
  myFont = loadFont('./public/MONOTESK-REGULAR.otf');

  canvas.mouseClicked(() => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    currentImageNumber = currentImageIndex + 1;
  });

}

function draw() {

  background(0);
  fill('#ffffff');
  textFont(myFont);
  textAlign(LEFT, BOTTOM);
  textSize(20);
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
    } else if (currentImageIndex === 4) {
      image(img5, 0, 0, mouseX * 0.3, mouseY * 0.3);
    } else if (currentImageIndex === 5) {
      image(img6, 0, 0, mouseX * 0.3, mouseY * 0.3);
    } else if (currentImageIndex === 6) {
      image(img7, 0, 0, mouseX * 0.3, mouseY * 0.3);
    } else if (currentImageIndex === 7) {
      image(img8, 0, 0, mouseX * 0.3, mouseY * 0.3);
    } else if (currentImageIndex === 8) {
      image(img9, 0, 0, mouseX * 0.3, mouseY * 0.3);
    } else if (currentImageIndex === 9) {
      image(img10, 0, 0, mouseX * 0.3, mouseY * 0.3);
    } 


    x += 0.1;
  }
  
  angle += speed;
  z++;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

