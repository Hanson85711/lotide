const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const countLetters = function(sentence) {
  let countLetter = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (countLetter[letter]) {
        countLetter[letter] += 1;
      } else {
        countLetter[letter] = 1;
      }
    }
  }
  return countLetter;
};

module.exports = countLetters;


const result1 = countLetters("LHL");
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);

const result2 = countLetters("Who knows ");
assertEqual(result2["W"], 1);
assertEqual(result2["w"], 1);

console.log(result2);
