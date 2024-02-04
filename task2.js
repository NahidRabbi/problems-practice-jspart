// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function countOccurrences(numbers, find) {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] === find) {
        count++;
      }
    }
    return count;
  }

  var numbers1 = [5, 6, 11, 12, 98, 5];
console.log("Output 1:", countOccurrences(numbers1, 5)); // Output: 2

var numbers2 = [5, 6, 11, 12, 98, 5];
console.log("Output 2:", countOccurrences(numbers2, 25)); // Output: 0
