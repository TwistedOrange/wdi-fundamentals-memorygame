console.log("JS file is connected to HTML! Woo!")

var allCards = [ 'queen', 'queen', 'king', 'king'];
var kingCard = "<img src='king.png' alt='king card' />";
var queenCard = "<img src='queen.png' alt='queen card' />";
var cardsInPlay = [];
var thePlayingBoard;

// no match found from last two selected cards, put cards back so player can try again
function tryAgain() {
  var cardsOnBoard = document.querySelectorAll('[data-card]');
  for (var x = 0; x< cardsInPlay.length; x++) {
    if ( cardsInPlay[0] === cardsOnBoard[x].textContent ) {
      cardsInPlay[x].textContent = "";
    }
  }
  
}

function isMatch() { 
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found two : "+cardsInPlay[0]+"s");
    
    // disable click event for chosen cards
    var disableClick = document.querySelectorAll('[data-card]');
    // find those cards in the displayed board
    for (var i=0; i<allCards.length; i++) {
      // is this card a match?
      if (disableClick[i].textContent === cardsInPlay[0]) {
        disableClick.removeEventListener('click', isTwoCards);        
      }
     alert("You Won! Click [Start Game] to play again.")
    }
    cardsInPlay = [];
    //restartTheBoard();
	} else {
    // no match found, put cards back in play
		//setTimeout(tryAgain, 1500); // wait 1.5 sec
    alert("no match found.")
	}
}

function createBoard() {
	// set the card's 'data-card' to be the element of the array
  // data — attributes are meant to store info about an element that is not tied to a style, e.g., 'king'.

  // randomize the deck
  //---add code for allCards[]


	for (var i=0; i< allCards.length; i++) {
		// create new div for each card
		var newCard = document.createElement('div');
		newCard.className = 'card';     // assign CSS style to each card

		// assign card value/type 
		newCard.setAttribute('data-card', allCards[i]);

    //console.log('created card -'+newCard.getAttribute('data-card', allCards[i]) )
		// add event to listen to & function to run on event
		newCard.addEventListener('click', isTwoCards);

		// add this element to the board
		thePlayingBoard = document.getElementById('game-board');	
		thePlayingBoard.appendChild(newCard);
    
    // when card is clicked, assign function to execute
    newCard.addEventListener('click', isTwoCards);
		//console.log('added card '+ i +' type: '+ allCards[i]);
	}
}

// one of the cards was clicked, store its value to later compare
function isTwoCards() {
	// add card to array of cards in play
  // use 'this' to reference element which triggered function call
  
	cardsInPlay.push(this.getAttribute('data-card'));
  var cardType = this.getAttribute('data-card');

  switch (cardType) {
    case 'queen' : 
      console.log('show queen card');
      cardType.innerHTML = queenCard;
      break;
    case 'king': 
      console.log('show king card');
      cardType.innerHTML = kingCard;
      break;
  }
	// if have two cards in play, check for a match
	if ( cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		
		// delay so easier to see
		setTimeout( function() {
      // wait 2 sec
    }, 5000);

		// clear cards for next try
		cardsInPlay = [];
	}
}

// starts new play, resets everything
function clearBoard() {
	cardsInPlay = [];

	var bd = document.getElementById('game-board');  
}

function goPlay() {
	// sets up the board, shuffles the deck
  console.log('goPlay me');
  createBoard();
}

// assign action to Start button to kick off new game
var startGame = document.getElementById('go');
startGame.addEventListener('click', goPlay);