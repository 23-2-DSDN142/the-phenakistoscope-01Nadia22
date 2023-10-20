
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  let yellowColor = color(237,173,114)
  let pinkColor = color(183,127,199)
  let blueColor = color(111,182,200)
  
  background(yellowColor)
  rectMode(CENTER)
  stroke(255)
  noFill()

  strokeWeight(3)

  let sizeOfBlock = 500;
  for(let i = 0; i< sizeOfBlock; i++){
  let gradentAmount = map(i,0,sizeOfBlock,0,1)

  let storkeColor = lerpColor(blueColor, pinkColor, gradentAmount)
  stroke(storkeColor)
  line(0,drum*4+i,width,drum*4+i)
  triangle(bass*14, vocal*15, drum*11, other*14, drum*13, vocal*12);


  let storkeColor2 = lerpColor(yellowColor, blueColor, gradentAmount)
  stroke(storkeColor2)
  line(0,other*6+i*2,width,other*6+i*2)
  ellipse(bass*7,drum*18,i/7)

  let storkeColor3 = lerpColor(pinkColor, blueColor, gradentAmount)
  stroke(storkeColor3)
  line(0,vocal*50+i*2,width,vocal+i*2)
  triangle(bass*16, vocal*17, drum*13, other*16, drum*15, vocal*14);
  

  let storkeColor1 = lerpColor(pinkColor, yellowColor, gradentAmount)
  stroke(storkeColor1)
  ellipse(width/2,height/2,-i+bass*2)
  ellipse(vocal*7,other*11,i/5)
  triangle(bass*15, vocal*16, drum*12, other*15, drum*14, vocal*13);
  ellipse(drum*22,vocal*12,i/10)

  let stripeWidth = map(other, 30, 100, 40, 80, true);
  let numStripes = height / stripeWidth;
  for(let i=0; i<numStripes; i=i+2) {
    let cury = map(i, 0, numStripes-1, 0, height);


    stroke(pinkColor)
    rect(1000, stripeWidth-300,cury, cury);
    stroke(yellowColor)
    rect(0, cury-310, width/3, stripeWidth);
    stroke(blueColor)
    rect(1020, stripeWidth-320,cury, cury);
    rect(0, cury-300, width/4-bass, stripeWidth);
  }


  }

  textFont('Impact');
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(vocal+bass/2);
  noStroke();
  fill(pinkColor);
  text(words, width/2-20, height-vocal*2+10);
  fill(blueColor);
  text(words, width/2+20, height-vocal*2-10);
  fill(yellowColor);
  text(words, width/2, height-vocal*2);
}

