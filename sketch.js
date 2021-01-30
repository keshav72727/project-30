var ground;
function setup(){

    createCanvas(600,600);

 ground=new Ground(300,590,600,20);

}

function draw(){
background(0);

   // ground.display();

drawSprites();
}