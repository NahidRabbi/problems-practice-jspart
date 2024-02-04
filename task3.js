// Write a function to count the number of vowels in a string.
function countVowels(str) {
    // Define a regular expression to match vowels
    var vowelRegex = /[aeiouAEIOU]/g;
    
    // Use match() method to find all occurrences of vowels in the string
    var vowelsArray = str.match(vowelRegex);
    
    // If vowelsArray is null (no vowels found), return 0, otherwise return the length of the array
    return vowelsArray === null ? 0 : vowelsArray.length;
  }
  var inputString = "Hello, how are you?";
console.log("Number of vowels:", countVowels(inputString)); // Output: 7
