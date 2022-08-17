function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length > arr2.length) {
    result = arr1.every((item, index) => item === arr2[index])
  }
  else {result = arr2.every((item, index) => item === arr1[index])};
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item *10);
  return resultArr; // array
}
