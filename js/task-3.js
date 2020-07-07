// const findLongestWord = function(string) {
//     const a = [];
//     longestWord = a[0];
//     string = string.split(' ');
//     for (ford in string){
//         a += word;
//     }
//     return
//   };
//   findLongestWord();
// console.log(a);

let i;
let word;
let string = "The quick brown fox jumped over the lazy dog";
// const a = [];
let longestWord;
string = string.split(" ");
// console.log(string);
// longestWord = string[0];
for (word in string) {
  longestWord = string[0];
  // console.log(longestWord.length, longestWord);
  // console.log(string[word]);
  for (i in string[word]) {
    // console.log(string[word].length);
    if (string[word].length > longestWord.length) {
      longestWord = string[word];
      // console.log(longestWord)
    }
  }
  console.log(longestWord);
}
// a += string[i];
// console.log(longestWord);
