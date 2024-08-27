//1. loop 이용
function loopFibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    let a = 0;
    let b = 1;
    let sum = 0;
    for (i = 2; i <= n; i += 1) {
      sum = a + b;
      a = b;
      b = sum;
    }
    return sum;
  }
}

function recursiveFibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}

function memoized(fn) {
  // 범용 memoized function
  const memoizedTable = {};
  return function B(k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedFibonacci = memoized(function A(n) {
  if (n <= 1) {
    return n;
  } else {
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  }
});

console.log(loopFibonacci(15));
console.log(recursiveFibonacci(15));
console.log(memoizedFibonacci(15));
