var objeto;

function setup() {
  createCanvas(400,400);
objeto=createSprite(200,200,30,30);

}

function draw() 
{
  background(30);
if(keyDown("left_arrow")){
objeto.position.x=objeto.position.x -5;
}
if(keyDown("right_arrow")){
  objeto.position.x=objeto.position.x +5;
  }
  if(keyDown("up_arrow")){
    objeto.position.y=objeto.position.y -5;
    }
    if(keyDown("down_arrow")){
      objeto.position.y=objeto.position.y +5;
      }


drawSprites();
}




