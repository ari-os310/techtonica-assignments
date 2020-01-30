console.log("Up and running!");

var cards = ["king", "queen", "queen", "king", "ace", "jack", "ace", "jack"];
var cardsinplay = [];

function flipCard(cardId) {
  alert("User flipped" + " " + cards[cardId]);
    cardsinplay.push(cards[cardId]); 
    if (cardsinplay.length === 2){ 
    return checkForMatch();
    }
}
function checkForMatch() {
  if (cardsinplay[0] === cardsinplay[1]){
    console.log("You might as well be Professor Trelawney!");
  } else {
      console.log("YOU'RE A MUGGLE");
  }
}





