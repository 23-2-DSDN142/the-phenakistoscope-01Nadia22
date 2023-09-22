function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(9);
  pScope.load_image_sequence("flower", "png", 14);
  pScope.load_image_sequence("cloud", "png", 3);
  pScope.load_image_sequence("backline", "png", 9);
  pScope.load_image("moon","png")
  pScope.load_image("back","png")
}

function setup_layers(pScope){
  new PLayer(null,60,70,90);

  var backlineSequence = new PLayer(backline);
  backlineSequence.mode(SWIRL(1));
  backlineSequence.set_boundary(0,100);

  var backImage = new PLayer(back);
  backImage.mode(SWIRL(0.001));
  backImage.set_boundary(0,30);

  var outerRing = new PLayer(outsideRing);
  outerRing.mode(RING);
  outerRing.set_boundary(930,1000);

  var flowerSequence = new PLayer(flower);
  flowerSequence.mode(SWIRL(1));
  flowerSequence.set_boundary(0,200);

  var cloudSequence = new PLayer(cloud);
  cloudSequence.mode(RING);
  cloudSequence.set_boundary(0,1000);

  var moonImage = new PLayer(moon);
  moonImage.mode(RING);
  moonImage.set_boundary(0,30);

  var outerRing2 = new PLayer(outsideRing2);
  outerRing2.mode(RING);
  outerRing2.set_boundary(970,1000);

}
function backline(x,y,animation,pScope){
  translate(x,y-80);
  scale(1);
  pScope.draw_image_from_sequence("backline", 0, 20, animation.frame);
}

function moon(x,y,animation,pScope){
  scale(1.3);
  pScope.draw_image("moon",x,y);
}

function outsideRing (x,y,animation,pScope){
 pScope.fill_background(255);
}

function back(x,y,animation,pScope){
  scale(0.35);
  pScope.draw_image("back",x,y);
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
  
}

function outsideRing2 (x,y,animation,pScope){
  pScope.fill_background(60,70,90);
 }
