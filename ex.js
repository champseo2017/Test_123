const maxArr = [1, 2, 3, 4, 6];
// ECMAScript 6
const max = Math.max(...maxArr); // Ex.1
console.log("max", max);

// Ex.2
let count = 0;
const inPut = 7;
const arrayPlus = [];
for (let i = 0; i < maxArr.length; i++) {
  count++;
  maxArr.map((value, index) => {
    let countValue = value + count;
    if (countValue === inPut) {
      arrayPlus.push(`${value} + ${count}`);
    }
  });
}
console.log("arrayPush", arrayPlus);

// ex.3
function minMaxSum(array) {
  var sum = array[0],
    min = array[0],
    max = array[0];

  for (let i = 1; i < array.length; i++) {
    sum += array[i];
    if (min > array[i]) min = array[i];
    if (max < array[i]) max = array[i];
  }
  return [sum - max, sum - min];
}

console.log(minMaxSum([1, 3, 5, 7, 9]));
