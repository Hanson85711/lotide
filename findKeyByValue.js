const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log( `✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`🛑 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKeyByValue;

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const bestNumbers = { 
  first_Place: 1,
  second_Place: 2,
  third_Place:  3
};

assertEqual(findKeyByValue(bestNumbers, 1), "first_Place");
assertEqual(findKeyByValue(bestNumbers, 2), "second_Place");
assertEqual(findKeyByValue(bestNumbers, 3), "third_Place");
assertEqual(findKeyByValue(bestNumbers, 4), undefined);