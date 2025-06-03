
let player={
  name:"WALEED",
  chips:300,
}
let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message;
let messageEl=document.getElementById("message-el");
let sumEl=document.querySelector("#sum-el");
let cardsEl=document.querySelector("#cards-el")
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name + ": $" +player.chips


function startGame(){
  isAlive=true;
  let firstCard=getRandomCard()
  let secondCard=getRandomCard()
  sum=firstCard+secondCard
  cards=[firstCard,secondCard]
  renderGame();
}




function renderGame(){
  sumEl.textContent="SUM: "+sum;
  cardsEl.textContent="CARDS: "
  for(i=0; i<cards.length;i++){

    cardsEl.textContent+=cards[i]+" "
  }

if(sum<21){

  message=  "DO YOU WANT TO DRAW A NEW CARD?"
}
 else if(sum===21){
    message="WOOOOOO! YOU GOT BLACKJACK!!!!!";
    hasBlackJack=true;
}

else{
   message= "YOU LOST!!!!!!!"
    isAlive=false;
}

 messageEl.textContent=message
}


function newcard(){

  if(isAlive===true && hasBlackJack===false){
 
  var card=getRandomCard();
  sum+=card;
  cards.push(card)
  
  renderGame();
  }
}


function getRandomCard(){
  var randomNumber=Math.floor(Math.random()*13)+1

  if(randomNumber>10){
    return 10;
  }
  else if(randomNumber===1){
    return 11
  }
  else{
    return randomNumber
  }
}

