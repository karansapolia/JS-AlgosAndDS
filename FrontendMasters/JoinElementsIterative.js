//  Time complexity: O(n)

const joinElements = (array, joinString) => {
  const result = array.reduce((prev, curr, index) => {
    if (index !== array.length - 1) {
      return prev + curr + joinString;
    }
    return prev + curr;
  }, "");

  return result;
};

console.log(joinElements(["a", "b", "c", "d"], "k"));
