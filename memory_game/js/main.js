console.log("up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

function flipCard(cardId) {
if (cardsInPlay.length === 2 && checkForMatch()) {
		alert("You found a match!");
	} else {
	alert("sorry, try again.");
	}
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};
flipCard(0);
flipCard(2);