const commonCharacters = (string1, string2) => {
  const result = {};

  string1.split('').forEach(letter => {
    if(string2.indexOf(letter) >= 0 && letter !== ' ') {
      result[letter] = letter;
    }
  });

  return Object.keys(result).join('');
};
