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
      player.getCount();
      form = new Form()
      form.display();
    }
  }
play(){
form.hide();
textSize(25);
text ("gameStarted",150,20);
Player.getPlayerInfo();
if(allPlayer!== undefined){
  var display_position = 180;
  display_position += 20;
  textSize(15);
  text(allPlayers[plr].name+":"+allPlayers[plr].distance,100,display_position)
}
if(keyIsdown(Up_Arrow)&&player.index!== null){
  player.distance += 50;
  player.apdate();
}

}



}
