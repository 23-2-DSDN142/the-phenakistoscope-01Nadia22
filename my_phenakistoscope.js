function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(9);
  pScope.load_image_sequence("flower", "png", 14);
  pScope.load_image_sequence("cloud", "png", 3);
  pScope.load_image("moon","png")
}

function setup_layers(pScope){
  new PLayer(null,60,70,90);

  let outerRing = new PLayer(outsideRing);
  outerRing.mode(RING);
  outerRing.set_boundary(930,1000);

  let flowerSequence = new PLayer(flower);
  flowerSequence.mode(RING);
  flowerSequence.set_boundary(0,1000);

  let cloudSequence = new PLayer(cloud);
  cloudSequence.mode(RING);
  cloudSequence.set_boundary(0,1000);

  let moonImage = new PLayer(moon);
  moonImage.mode(RING);
  moonImage.set_boundary(0,30);

  let outerRing2 = new PLayer(outsideRing2);
  outerRing2.mode(RING);
  outerRing2.set_boundary(970,1000);
}

function moon(x,y,animation,pScope){
  scale(1.3);
  pScope.draw_image("moon",x,y);
}

function outsideRing (x,y,animation,pScope){
 pScope.fill_background(255);
}

function flower(x,y,animation,pScope){
  translate(x,y+650);
  scale(1);
  pScope.draw_image_from_sequence("flower", 0, 20, animation.frame);
}

function cloud(x,y,animation,pScope){
  translate(x,y+860);
  scale(1);
  pScope.draw_image_from_sequence("cloud", 0, 10, animation.frame);
  frameRate(6)
}

function outsideRing2 (x,y,animation,pScope){
  pScope.fill_background(60,70,90);
 }

 function line (x,y,animation,pScope){
  line(10,29,200,300)
  pScope.fill_background(60,70,90);
 }