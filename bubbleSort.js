function bubbleSort(arr) {
  const sortedArray = [...arr];
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - 1 - i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }
  return sortedArray;
}

const unsortedElements = [];

for (let i = 0; i < 100000; i++) {
  unsortedElements.push(Math.floor(Math.random() * 1000000));
}

console.time("bubbleSort");
const sortedElements = bubbleSort(unsortedElements);
console.timeEnd("bubbleSort");

