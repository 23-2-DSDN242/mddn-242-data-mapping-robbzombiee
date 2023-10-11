let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let star; // star varaible

let white = '#FFFFFF' // white color into variable
let black = '#000000' // black color into variable
let blue = '#050854' // blue color into variable
// change these three lines as appropiate
let sourceFile = "input_4.jpg";
let maskFile   = "mask_4.png";
let outputFile = "output_4.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  star = loadImage('sun.png'); //load star
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  //imageMode(CENTER);
  noStroke();
  background(0, 0, 0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  image(sourceImg,0,0,width,height);
}

function draw () {

  for(let i=0;i<100;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    if(mask[0] > 128) {
      image(star,x-5,y,0); // comment this to turn off stars.
      stroke(white); // rain color. options are white, black and blue
      strokeWeight(.5); // size of rain lines.
      line(x, y, x , y + 100); // rain lines.
    }
    else {
      fill(pix); // make glitch rectangles the pixel color
      noStroke(); // remoke stroke from cubes
      let pointSize = 11; // size of glitch rects
      rect(x, y, pointSize, pointSize); // create glitch rectangles

    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 50) { //experimented with values: 10, 40 and 50
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
