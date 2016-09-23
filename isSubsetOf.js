Array.prototype.isSubsetOf = function(inputArray) {
  var exists = true;

  for (var i = 0; i < this.length; i++) {
    if (inputArray.indexOf(this[i]) === -1) {
      exists = false;
    }
  }

  return exists;
};
