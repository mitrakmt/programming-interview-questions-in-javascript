// https://medium.com/@mike_mitrakos/translate-roman-numerals-in-javascript-482ef6e55ee7#.2jt22i8pg

function translateRomanNumeral (romanNumeral) {

  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var result = 0;
  var input = romanNumeral.split('');

  for (var i = 0; i < input.length; i++) {
    var currentLetter = DIGIT_VALUES[input[i]];
    var nextLetter = DIGIT_VALUES[input[i + 1]];
    if (DIGIT_VALUES[input[i]] == undefined) {
      return 'null';
    } else {
      if (currentLetter < nextLetter) {
        result += nextLetter - currentLetter;
        i++;
      } else {
        result += currentLetter;
      }
    }
  };

  return result;
}
