const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    const resultNums = tail([1 , 2 , 3 , 4]);
    assert.deepEqual(resultNums, [2, 3, 4]);
  }); 

  it("Original Input of ['Yo Yo', 'Lighthouse', 'Labs'] should return to be the same when calling for original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

})