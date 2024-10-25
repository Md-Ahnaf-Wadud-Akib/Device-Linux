function maxValue(array) {
  maxElement = 0;
  for (i = 0; i <= array.length; i++) {
    let index = i;
    let element = array[index];
    if (element > maxElement) {
      maxElement = element;
    }
  }
  return maxElement;
}

const abcArray = [23, 97, 56, 74, 568, 78, 54, 37, 26];
const result = maxValue(abcArray);
console.log(`The max value of ${abcArray} is: ${result}`);