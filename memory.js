const cards = document.querySelectorAll('.memory-card');

function flipCard(){
this.classList.toggle('flip');
}

 (function shuffle() {
  cards.forEach(card => {
   let ramdomPos = Math.floor(Math.random() * 12);
   card.style.order = ramdomPos;
  });
})();

cards.forEach(card=> card.addEventListener('click', flipCard));
