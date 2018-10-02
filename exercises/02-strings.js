// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
function reverse(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
reverse("hello");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord(str) {
  const stringArray = str.split(" ")
  const longestWord = stringArray.reduce((a, b) => {
    if (b.length > a.length) {
      return b;
    } else {
      return a
    }
  })
  return longestWord;
}
findLongestWord("book full of dogs")

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer(str) {
  var re = /heck|darn|dang|crappy/
  var str = "mom get the heck in here and bring me a darn sandwich."
  var newstr = str.replace(re, "a")
  return nicer(newstr)
}
return nicer

// Option B

function nicer(str) {
  str.replace(/heck|darn|dang|crappy/g, 'a')
}
return nicer("mom get the heck in here and bring me a darn sandwich.")

// Tip: https://codersblock.com/blog/javascript-string-replace-magic/
// var str = 'Waiting on Zoe, Elena, and Cal.';
// str.replace(/zoe|elena|cal/gi, 'someone');
// "Waiting on someone, someone, and someone."

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll(str) {
  var str = str.toUpperCase()
}
return capitalizeAll("hello my name is robo")


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a String string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
var split = function (string, delimiterString) {
  var stringArray = []
  var j = 0

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === delimiterString) {
      j++;
      stringArray.push('');
    } else {
      stringArray[j] += string.charAt(i);
    }
  }
  return stringArray;
}
return split('a-b-c', '-')