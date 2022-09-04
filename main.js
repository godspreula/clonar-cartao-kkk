//variaveis globais
var baixar,baixar1;
var erro,erro0;
var erro1,erro2;
var foi,foi1;
var fundo,bc;
var verde,verde1;









function preload(){
bc = loadAnimation("fundo.gif");
baixar1 = loadAnimation("baixar.gif");
erro0 = loadAnimation("erro.gif");
erro2 = loadAnimation("erro1.gif");
foi1 = loadAnimation("foi.gif");
verde1 = loadAnimation("verde.gif");


}


function setup(){
    createCanvas(1000,600);
    fundo = createSprite(300,300,20,20);
    fundo.addAnimation("andar",bc);
    baixar = createSprite(500,50,20,20);
    baixar.addAnimation("sus",baixar1);
    erro = createSprite(800,450,20,20);
    erro.addAnimation("manin",erro0);
    erro1 = createSprite(100,300,20,20);
    erro1.addAnimation("oxe",erro2);
    foi = createSprite(200,100,20,20);
    foi.addAnimation("bah",foi1);
    verde = createSprite(400,400,20,20);
    verde.addAnimation("pia",verde1);


    verde.scale = 0.8;
    foi.scale = 0.9;
    erro.scale = 1.2
    baixar.scale = 0.3;
}



function draw(){


    drawSprites();
}