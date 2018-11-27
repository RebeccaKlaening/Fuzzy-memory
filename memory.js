const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){
this.classList.add('flip');

  if(!hasFlippedCard) {
      // first click
    hasFlippedCard = true;
    firstCard = this;
}   else {
    // second click
  hasFlippedCard = false;
  secondCard = this;

    // do cards match
    

  }
}






// to shuffle all my cards
 (function shuffle() {
  cards.forEach(card => {
   let ramdomPos = Math.floor(Math.random() * 12);
   card.style.order = ramdomPos;
  });
})();






cards.forEach(card=> card.addEventListener('click', flipCard));
