// This is part of series on my blog covering common programming interview questions. You can find the article covering the 'all permutations of a set' article here: https://medium.com/@mike_mitrakos/all-permutations-of-a-set-f1be174c79f8#.b9c08ddhv


function getAllPermutations(string) {
  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    var charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}
