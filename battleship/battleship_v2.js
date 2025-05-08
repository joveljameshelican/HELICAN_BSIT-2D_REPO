var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = Location1 + 1;
var location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (!isSunk) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    
    if (guess == null) {
        alert ("Thank you for playing!");
        break;
    }
    if (guess < 0 || guess > 6) {
        alert ("Please enter a valid cell number!");
        
        guesses++;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits++;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }
    }
}

var  accuracy = (guesses)