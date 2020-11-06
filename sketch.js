const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;

function preload(){

var umbrella = new Umbrella(400,300,50,50);

}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    
    
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

