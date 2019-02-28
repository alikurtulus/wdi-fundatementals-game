alert("Hello, Friends")
var cards = [
{rank:"queen",
 suit:"hearts",
 cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"

},
   {
       rank:"king",
       suit:"hearts",
       cardImage:"images/king-of-hearts.png"


   },
   {
   	rank:"king",
   	suit:"diamonds",
   	cardImage:"images/king-of-diamonds.png"
   }

];

var cardsInPlay =[]

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};
var flipCard = function(){


	var cardOne =cards[0];
 cardsInPlay.push(cardOne);
console.log("User flipped "+cards[cardId].rank);
console.log("Suit :"+cards[cardId].suit);
console.log("image :"+cards[cardId].image);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped "+cards[cardId].rank);
console.log("Suit :"+cards[cardId].suit);
console.log("image :"+cards[cardId].image);
checkForMatch();
};

var createBoard=function () {
for (var i = 0; i < cards.length; i++) {
 var newListItem = document.createElement('img');
newListItem.setAttribute('src', 'images/back.png');
newListItem.setAttribute('data-id', i);
newListItem.addEventListener("click",function () {
	flipCard();
});

}

createBoard();
