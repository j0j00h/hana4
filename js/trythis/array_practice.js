const assert = require("assert");

// reduce 사용 예제
const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];

const obj = objs.reduce((acc, curr) => ({ ...acc, ...curr }), {});

console.log(obj);
assert.deepStrictEqual(obj, { id: 5, name: "Hong", addr: "Seoul" });

//todo: 1. 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.

const arr = [1, 2, 3, 4];

function push(array, ...args) {
  return [...array, ...args];
}

// assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);

function pop(array, n = 1) {
  array.slice(0, -(n + 1));
  return array;
}

assert.deepStrictEqual(pop(arr), [4]);
// assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝(꺼내 줘)!

function unshift(array, ...args) {
  return [...args, ...array];
}
// assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
// assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

function shift(array, n = 1) {
  return array.splice(n, Infinity);
}
// assert.deepStrictEqual(shift(arr), [2, 3, 4]);
// assert.deepStrictEqual(shift(arr, 2), [3, 4]);
// assert.deepStrictEqual(arr, [1, 2, 3, 4]);

//todo: 2.
