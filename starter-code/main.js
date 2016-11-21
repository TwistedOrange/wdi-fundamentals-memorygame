console.log("JS file is connected to HTML! Woo!")

/* Instructions from Unit 9.5 (completed 11/18/2016)

1) In your main.js file, create an if else statement checking for equality between two of your cards (you choose which ones).

if statement should consist of a boolean checking for equality between two created variables. You should have a condition to 
compare two king variables, two queen variables, and one of each. Start with comparing cardTwo with cardFour (using ===).

2) If values are equal, execute an alert with the message, "You found a match!". 
If values are not equal, execute an alert with the message, "Sorry, try again.".

3) Save your main.js file and open your index.html file in the browser to check to see if your alert is working. 
*/

var cardOne, cardTwo, cardThree, cardFour;
var isKing = "King";
var isQueen = "Queen";

cardOne = isKing;
cardThree = isQueen;

if (cardOne === isKing && cardThree === isKing) {
  alert("You found two matching Kings.");
} else if (cardOne === isQueen && cardThree === isQueen) {
  alert("You found two matching Queens.");
} else { alert("No matches, try again."); }

