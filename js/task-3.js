const findLongestWord = function(string) {
  string=string.split(' ');
  const longestWord = string[0];
  for (let i = 0; i < string.length; i += 1){
      if (string[i].length > longestWord.length) {
          longestWord = string[i];
      }
  }
  return longestWord;
}

