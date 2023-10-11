let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let star;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  star = loadImage('sun.png');
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
    fill(pix);
    if(mask[0] > 128) {
      //let pointSize = 0;
      image(star,x-5,y,0); // comment this to turn off stars
      stroke(255,255,255); // rain line color.
      strokeWeight(.5);
      line(x, y, x , y + 100); // rain lines.
    }
    else {
      noStroke();
      let pointSize = 11;
      rect(x, y, pointSize, pointSize);

    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 50) { //10, 40, 50
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
