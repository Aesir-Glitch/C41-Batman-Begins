const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup(){
    createCanvas(400,800);
    Engine = Engine.create();
    World = Engine.world;

    var umbrella = new Umbrella(400,300,50,50);
    var maxDrops = 100;

}

function draw(){
    Engine.update(engine);

    umbrella.display();

    for(var i = 0; i < maxDrops; i++) {
        maxDrops.push(new Drop(random(0,400),(random(0,400))))
    }

    if(this.rain.position.y > height) {
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }

}   

