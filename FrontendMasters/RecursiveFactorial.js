const recursiveFactorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * recursiveFactorial(num - 1);
  }
};

const memoize = (fn) => {
  cache = {};
  return (num) => {
    if (cache[num]) {
      return cache[num];
    } else {
      const result = fn(num);
      cache[num] = result;
      console.log(cache);
      return result;
    }
  };
};

const recursiveFactorialMemo = memoize((num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * recursiveFactorialMemo(num - 1);
  }
});

console.log(recursiveFactorial(7));
console.log(recursiveFactorialMemo(8));
console.log(recursiveFactorialMemo(9));
