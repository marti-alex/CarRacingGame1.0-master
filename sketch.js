var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car, kar2, kar3, kar4;
var cargrup;

function setup(){
  canvas = createCanvas(windowWidth -50, windowHeight-50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){ 
    game.update(1);
  }
  if(gameState === 1){  
    clear();
    game.play();
  }
}
