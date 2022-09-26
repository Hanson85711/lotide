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

module.exports = eqArrays;
