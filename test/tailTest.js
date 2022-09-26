const tail = require('../tail');
const assertEqual = require('../assertEqual');
//Test Case 1

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Test Case 2

const resultNums = tail([1 , 2 , 3 , 4]);
assertEqual(resultNums.length, 3);
assertEqual(resultNums[0], 2);
assertEqual(resultNums[1], 3);
assertEqual(resultNums[2], 4);

//Test Case: Checking original Array isn't modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);