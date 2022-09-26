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

module.exports = middle;


