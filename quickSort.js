function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);
  const middleElem = arr[middleIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === middleIndex) continue;
    if (arr[i] < middleElem) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), middleElem, ...quickSort(right)];
}

const unsortedElements = [];

for (let i = 0; i < 100000; i++) {
  unsortedElements.push(Math.floor(Math.random() * 1000000));
}

console.time("quickSort");
const sortedElements = quickSort(unsortedElements);
console.timeEnd("quickSort");
