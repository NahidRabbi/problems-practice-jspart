// Generate a random number between 10 to 20.

function generateRandomNumber() {
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
    var randomDecimal = Math.random();
    
    // Scale and shift the random decimal to the desired range (10 to 20)
    var randomNumber = randomDecimal * (20 - 10) + 10;
    
    // Use Math.floor() to round down to the nearest integer
    return Math.floor(randomNumber);
}
var randomNumber = generateRandomNumber();
console.log("Random number between 10 and 20:", randomNumber);
