// Question: https://frontendmasters.com/courses/practical-algorithms/linear-search-exercise/

const LinearSearch = (arr, val, instance) => {
  // time complexity: O(n)
  let index = -1;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      ++count;
      if (count === instance) {
        index = i;
        break;
      }
    }
  }

  return index;
};

console.log(LinearSearch([3, 1, 4, 9, 5, 9, 0, 5], 5, 2));
