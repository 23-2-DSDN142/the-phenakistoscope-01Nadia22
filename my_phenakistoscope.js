const SLICE_COUNT = 15;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 255, 248, 232);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 100, 1050 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}

function faces(x, y, animation, pScope){
  
  scale(animation.frame*2);

  var petalsize1 = 50;
var petalsize2 = 9;
var petal1y=70
var petal1x=50
var Flowercoresize = 30
var flowercolorA = color(252, 223, 104,150);//yellow
  var flowercolorB = color(193, 104, 252,150);//purple
  var flowercolorC = color(252, 104, 143,120);//pink
  var flowercolorD = color(255, 171, 82,15);//orange
  var Flowercorecolor = color(252, 250, 235,150);
fill(flowercolorA);//yellow flower
  noStroke();
  circle(petal1x, petal1y, petalsize1);//Petal
  circle(petal1x+20, petal1y-20, petalsize1);//Peta2
  circle(petal1x+42, petal1y-5, petalsize1);//Peta3
  circle(petal1x+37, petal1y+21, petalsize1);//Peta4
  circle(petal1x+10, petal1y+23, petalsize1);//Peta5
  fill(Flowercorecolor);
  circle(petal1x+22, petal1y+4, Flowercoresize);//cores

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(193, 104, 252,150)
  arc(x,y,400,400,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background


}
