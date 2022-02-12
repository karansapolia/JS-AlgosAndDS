const BinarySearch = (arr, val) => {
  let first = 0;
  let last = arr.length - 1;
  let pivot;

  while (first <= last) {
    pivot = Math.floor((first + last) / 2);

    if (arr[pivot] === val) return pivot;
    else {
      if (arr[pivot] < val) {
        first = pivot + 1;
      } else {
        last = pivot - 1;
      }
    }
  }

  return -1;
};

console.log(
  BinarySearch(
    [-23, -22, -20, -7, 0, 1, 3, 45, 67, 89, 100, 200, 301, 401, 500],
    999
  )
);
