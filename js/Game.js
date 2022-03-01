class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }


    car = createSprite(100,200);
    kar2 = createSprite(200,200);
    kar3 = createSprite(300,200);
    kar4 = createSprite(400,200);

    cargrup = [car, kar2, kar3, kar4]
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      // var display_position = 130;
      var indice = 0;
      var x = 0;
      var y;
      for(var plr in allPlayers){
        // if (plr === "player" + player.index)
        //   fill("red")
        // else
        //   fill("black");

        // display_position+=20;
        // textSize(15);
        // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)

          indice +=1;
          x += 200;
          y = windowHeight-allPlayers[plr].distance
          cargrup[indice -1].x = x           
          cargrup[indice -1].y = y
          
          console.log(indice -1)

 
          if(indice === player.index){
            cargrup[indice -1].shapeColor = " blue "

            console.log("player"+indice -1)
            
          }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
