// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

  // Initialize variables to keep track of the longest word and its length
  var longestWord = "";
  var maxLength = 0;
  
  // Iterate over each word in the array
  for (var i = 0; i < words.length; i++) {
    // If the length of the current word is greater than the current maxLength
    // Update maxLength and longestWord
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWord = words[i];
    }
  }
  
  return longestWord;

  var inputString = "I am learning Programming to become a programmer";
console.log("Longest word:", findLongestWord(inputString)); 
