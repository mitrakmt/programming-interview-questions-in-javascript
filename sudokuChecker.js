// Prompt:
// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

// Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a \n character. Check your console when submitting to see the input for yourself.

function sudokuCheck (boardStr) {
  let storage = [{}, {}, {}]
  var solved = true;
  let board = boardStr.split('\n');
  var result = 'solved';
  reset(storage);

  board.forEach(function (row, rowIndex) {

  	if (rowIndex % 3 === 0 && rowIndex !== 0) {

  		storage.forEach(function (sudoku) {
  			for (var key in sudoku) {
  				if (sudoku[key] !== 1) {
  					solved = false;
  					return
  				}
  			}
  		});

  		if (!solved) {
  			result = 'invalid'
  		} else {
  			reset(storage);
  		}
  	}

  	for (var i = 0; i < row.length; i++) {
  		if (i < 3) {
  			storage[0][row[i]]++;
  		} else if (i < 6) {
  			storage[1][row[i]]++;
  		} else {
  			if (rowIndex > 5) {
  				console.log(row[i])
  				console.log(storage[2])
  			}
  			storage[2][row[i]]++;
  		}
  	}

  });

  storage.forEach(function (sudoku) {
  	for (var key in sudoku) {
  		if (sudoku[key] !== 1) {
  			solved = false;
  			return
  		}
  	}
  });

  if (!solved) {
  	result = 'invalid'
  }

  return result;
}

function reset(storage) {
	storage.forEach(function (obj) {
  	for (var i = 1; i < 10; i++) {
  		obj[i] = 0;
  	}
  })
}
