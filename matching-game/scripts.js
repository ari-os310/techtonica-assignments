const cards = document.querySelectorAll(".memory-card");
   
let flippedCard = false;
    let firstCard, secondCard;

function flipCard () { 
  this.classList.add("flip");
    
    if (!flippedCard) {
        flippedCard = true;
            firstCard = this;

 return;
  } 
    flippedCard = false;
      secondCard = this;

    checkForMatch();
} 

            // Make sure the cards match

function checkForMatch(){
  if(firstCard.dataset.img === secondCard.dataset.img){
    disableClick();
  setTimeout(() => {
    alert("It's a Match!");
  }, 850);  
    
 } else {
                 //cards dont match
    returnFaceDown();
     }
  }

                // make cards unclickable if matching
function disableClick(){
  firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

                // if not matching, flip back over
function returnFaceDown(){
 setTimeout(() => {
   firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1100);
}

            // shuffle the cards --IIF
(function shuffle(){
    cards.forEach(card => {
      let cardNum = Math.floor(Math.random()*8);
        card.style.order = cardNum;
    });
})();
    
cards.forEach(card => card.addEventListener("click", flipCard));

