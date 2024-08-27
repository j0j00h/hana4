const assert = require("assert");

//1,

const arr = [100, 200, 300, 400, 500, 600, 700];

function f1(arr) {
  for (const index in arr) {
    console.log(index);
  }
}

function f2(arr) {
  for (const index in arr) {
    console.log(arr[index]);
  }
}

f1(arr);
console.log("-----------------------");
f2(arr);
console.log("-----------------------");

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

function f3(obj) {
  for (const key in obj) {
    console.log(key);
  }
}

function f4(obj) {
  for (const key in obj) {
    console.log(obj[key]);
  }
}

function f5(obj) {
  for (const value of Object.values(obj)) {
    console.log(value);
  }
}

f3(obj);
console.log("-----------------------");
f4(obj);
console.log("-----------------------");
f5(obj);
console.log("-----------------------");

Object.defineProperty(obj, "level", {
  enumerable: false,
});

console.log(Object.entries(obj));
console.log("-----------------------");

Object.defineProperty(obj, "role", {
  configurable: false,
});

//2.
const arr2 = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

function makeObjectFromArray(arr) {
  let obj2 = {};

  for (const [key, ...vals] of arr) {
    obj2[key] = vals;
  }
  return obj2;
}

console.log(makeObjectFromArray(arr2));
console.log("-----------------------");

const obj2 = { A: [10, 20], B: [30, 40], C: [50, 60, 70] };

function makeArrayFromObject(obj) {
  let arr = [];

  for (const key in obj) {
    arr.push([key, ...obj[key]]);
  }
  return arr;
}

console.log(makeArrayFromObject(obj2));

//3.
console.log("-------------------------------");
function sallowCopy(obj) {
  const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
  const newKim = {};
  for (const k in kim) {
    newKim[k] = kim[k];
  }
  assert.deepStrictEqual(kim, newKim);
  newKim.addr = "Daegu";
  assert.notDeepStrictEqual(kim, newKim);
  console.log("shallow>>", kim.addr !== newKim.addr); // true면 통과!
  console.log("🚀  kim newKim:", kim, newKim);
}
// sallowCopy();

function isObject(obj) {
  return obj && typeof obj === "object";
}

const KIM = { nid: 3, nm: "Kim", addr: { city: "Pusan" }, [Symbol()]: "sym" };
function copyObject(obj) {
  console.log("aaaaa", isObject(obj));
  if (!isObject(obj)) return obj;

  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = copyObject(obj[k]);
  }
  // for (const k in obj) {
  //   newer[k] = copyObject(obj[k]);
  // }

  // const symbols = Object.getOwnPropertySymbols(obj);
  // console.log('🚀  symbols:', symbols);
  // for (const symKey of symbols) {
  //   newer[symKey] = obj[symKey];
  // }

  return newer;
}

const newKim = copyObject(KIM);
assert.deepStrictEqual(KIM, newKim);
newKim.addr.city = "Daegu";
assert.notDeepStrictEqual(KIM, newKim);
// console.log("shallow>>", KIM.addr.city !== newKim.addr.city); // true면 통과!
// console.log("🚀  kim newKim:", KIM, newKim);
