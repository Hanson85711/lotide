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
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const middle = function(array) {
  let output = [];
  if (array.length === 1 || array.length === 2) { //If array has only 1 or 2 elements
    console.log(output);
    return output;
  }
  if (array.length % 2 === 0) {   //If array is even length
    output.push(array[array.length / 2 - 1]);
    output.push(array[array.length / 2]);
    console.log(output);
    return output;
  }
  //If array is odd length
  output.push(array[(array.length - 1) / 2]);
  console.log(output);
  return output;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
