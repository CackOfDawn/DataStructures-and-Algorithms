// same([1,2,3],[4,1,9]) // true
// same([1,2,3],[1,9]) // false
// same([1,2,1],[4,4,1]) // false (must be same frequency)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// O(N^2)

function sameRefactored(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (const valOfArr1 of arr1) {
    frequencyCounter1[valOfArr1] = (frequencyCounter1[valOfArr1] || 0) + 1;
  }
  for (const valOfArr2 of arr2) {
    frequencyCounter2[valOfArr2] = (frequencyCounter2[valOfArr2] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
// O(N)
