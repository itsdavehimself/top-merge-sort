function merge(firstArr, secondArr, m, n) {
  let i = 0;
  let j = 0;
  let k = 0;
  
  let newArr = [];

  while (i <= m - 1 && j <= n - 1){
    if (firstArr[i] < secondArr[j]) {
      newArr[k++] = firstArr[i++];
    } else {
      newArr[k++] = secondArr[j++];
    };
  };

  for (i; i <= m - 1; i++) {
    newArr[k++] = firstArr[i];
  };

  for (j; j <= n - 1; j++) {
    newArr[k++] = secondArr[j];
  };

  return newArr;
};


function mergeSort(arr) {
  let sortedArr = [];

if (arr.length < 2) return arr;
  else {
    let leftArr = arr.slice(0, arr.length / 2);
    let rightArr = arr.slice(arr.length / 2);
    let sortedLeft = mergeSort(leftArr);
    let sortedRight = mergeSort(rightArr);
    let merged = merge(sortedLeft, sortedRight, sortedLeft.length, sortedRight.length);
    for (let i = 0; i < merged.length; i++) {
      sortedArr.push(merged[i]);
    }
  }
  return sortedArr;
}