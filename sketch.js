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
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;

let myFont;

let currentImageIndex = 0;
let totalImages = 10;
let currentImageNumber = 1;
let loadingText = "Loading images...";

let imagesLoaded = false;

function preload() {
  img1 = loadImage('./public/The data visualisatino of my idiosyncrasies_Page_12 (Small).png', imageLoaded);
  img2 = loadImage('./public//FLUX 1.jpg', imageLoaded);
  img3 = loadImage('./public/output-onlinegiftools.gif', imageLoaded);
  img4 = loadImage('./public/LOGO1.png', imageLoaded);
  img5 = loadImage('./public/output-onlinegiftools (1).gif', imageLoaded);
  img6 = loadImage('./public/Baner Free Mockup.png', imageLoaded);
  img7 = loadImage('./public/Baner Free Mockup (1).png', imageLoaded);
  img8 = loadImage('./public/MP.png', imageLoaded);
  img9 = loadImage('./public/v2-o.png', imageLoaded);
  img10 = loadImage('./public/RENDER.png', imageLoaded);
  myFont = loadFont('./public/MONOTESK-REGULAR.otf');
}

function imageLoaded() {
  if (
    img1 !== undefined &&
    img2 !== undefined &&
    img3 !== undefined &&
    img4 !== undefined &&
    img5 !== undefined &&
    img6 !== undefined &&
    img7 !== undefined &&
    img8 !== undefined &&
    img9 !== undefined &&
    img10 !== undefined
  ) {
    imagesLoaded = true;
  }
}

function setup() {
  const canvas = createCanvas(w, h);
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
  if (!imagesLoaded) {
    // Images are still loading
    background(0);
    fill('#ffffff');
    textAlign(CENTER, CENTER);
    textSize(30);
    textFont(myFont);
    text(loadingText, width / 2, height / 2);
  } else {
    // Images are loaded, proceed with normal drawing
    background(0);
    fill('#ffffff');
    textFont(myFont);
    textAlign(LEFT, BOTTOM);
    textSize(20);
    text(`Click Me: ${currentImageNumber}/${totalImages}`, mouseX, mouseY);

    translate(width / 2, height / 2);
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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
