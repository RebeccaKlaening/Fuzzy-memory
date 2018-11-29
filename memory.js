const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
if (lockBoard) return;
this.classList.add('flip');

  if(!hasFlippedCard) {
      // first click
    hasFlippedCard = true;
    firstCard = this;
      return;
    }
    // second click
  secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
  }


function checkForMatch() {
if (firstCard.dataset.image === secondCard.dataset.image) {
  disableCards();
  return;
  }

  unflipCards();
}

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

  function unflipCards() {
    lockBoard = true;
  setTime0ut (() => {
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
    lockBoard = false;
  }, 1500);
}







// to shuffle all my cards
 (function shuffle() {
  cards.forEach(card => {
   let ramdomPos = Math.floor(Math.random() * 12);
   card.style.order = ramdomPos;
  });
})();






cards.forEach(card=> card.addEventListener('click', flipCard));
