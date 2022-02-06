// Transform this simple sort algorithm into a unique sort.
// It should not return duplicate values in the sorted array

//  my solution
// const uniqSort = (arr) => {
//   const cache = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!cache[arr[i]]) {
//       cache[arr[i]] = true;
//     }
//   }

//   let array = Object.keys(cache);
//   array = array.map((val) => parseInt(val));

//   return array;
// };

// Solution using least inbuilt methods
// const uniqSort = (arr) => {
//   const cache = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (!cache[arr[i]]) {
//       cache[arr[i]] = true;
//     }
//   }

//   return Object.keys(cache)
//     .map((val) => parseInt(val))
//     .sort((a, b) => a - b);
// };

// solution using Map instead of Object
const uniqSort = (arr) => {
  const cache = new Map();

  for (let i = 0; i < arr.length; i++) {
    // O(n)
    if (!cache[arr[i]]) {
      cache[arr[i]] = true;
      cache.set(arr[i], true);
    }
  }

  return [...cache.keys()].sort((a, b) => a - b); // O(n log n)
};

const a = uniqSort([
  -223, 5, 33, 1, 2, 3, 5, 6, 5, 4, 90, 3, 34, 34, 2, 3, 2, 5, 6, 7, 2, 5, 2,
]);

console.log(a);
