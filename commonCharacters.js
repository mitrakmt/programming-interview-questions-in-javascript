// https://medium.com/init-js/common-characters-in-javascript-5b9b16ef3529#.exx6qdbpk

const commonCharacters = (string1, string2) => {
  const result = {};

  string1.split('').forEach(letter => {
    if(string2.indexOf(letter) >= 0 && letter !== ' ') {
      result[letter] = letter;
    }
  });

  return Object.keys(result).join('');
};
