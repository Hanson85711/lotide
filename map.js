const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const eqArrays = function(array1, array2) {
  let isSame = true;
  if (array1.length === array2.length) {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] !== array2[x]) {
        isSame = false;
      }
    }
  } else {
    isSame = false;
  }
  return isSame;
} 

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log( `✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + "001");
const results3 = map(words, word => word);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["ground001", "control001", "to001", "major001", "tom001"]);
assertArraysEqual(results3, ["ground", "control", "to", "major", "tom"]);
