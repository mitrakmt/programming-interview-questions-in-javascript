// Prompt:
// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.

function spiralTraversal (oldMatrix) {
  var matrix = [];
  var output = [];
  oldMatrix.forEach( array => matrix.push(array.slice()));

  function recurse(matrix) {
  	if (matrix.length === 0 || matrix[0].length === 0) {
  		return
  	}

  	output = output.concat(matrix.shift());

  	if (matrix.length === 0 || matrix[0].length === 0) {
  		return
  	}

  	for (var i = 0; i < matrix.length; i++) {
  		output.push(matrix[i].pop());
  	}

  	if (matrix.length === 0 || matrix[0].length === 0) {
  		return
  	}

  	output = output.concat(matrix.pop().reverse());

  	if (matrix.length === 0 || matrix[0].length === 0) {
  		return
  	}

  	for (var j = matrix.length - 1; j >= 0; j--) {
  		output.push(matrix[j].shift());
  	}

  	return recurse(matrix)
  }

  recurse(matrix);

  return output;
}
