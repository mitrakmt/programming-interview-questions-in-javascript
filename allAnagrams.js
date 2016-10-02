function allAnagrams (str) {
  var storage = {};

  function recurse(used, avail) {
    if(avail.length === 0){
      storage[used]=true;
    }
    for(var i=0; i<avail.length; i++) {
      var avail2 = avail.slice(0,i) + avail.slice(i+1);
      recurse(used+avail[i], avail2);
    }
  }

  recurse('', str);
  return Object.keys(storage);
}
