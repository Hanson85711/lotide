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

const without = function (source, itemsToRemove) {
  let outputArray = [];
  console.log(itemsToRemove);
  for (let element of source) {
    let remove = false; 
    for (let item of itemsToRemove) {
      if (element === item) {
        remove = true;
      }
    }
    if (!remove) {
      outputArray.push(element);
    }
  }
  return outputArray;
}

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
assertArraysEqual((without([1, 2, 3, 1, 2], [1])), [2, 3, 2]);
assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"])), ["1", "2"]);

//Test case to make sure original array isnt modified 

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

