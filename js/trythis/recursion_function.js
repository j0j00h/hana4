let sum = 0;
for (let i = 1; i <= 100; i += 1) {
  sum += i;
}
console.log("🚀  sum:", sum);

function addTo100(a) {
  if (a === 100) return a;
  return a + addTo100(a + 1);
}

console.log(addTo100(1));

function addTo100TCO(a, sum = 0) {
  if (a === 100) return sum + a;
  const c = a + 1;
  const d = sum + a;
  return addTo100TCO(a + 1, (sum += a));
}
console.log("🚀addTo100TCO:", addTo100TCO(1));

console.log("==========================");

//todo: 연습문제

//1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오.
//(단, array 메소드를 사용하지 말고, destructuring을 사용하시오)

//makeArray(10);
//⇒ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//makeReverseArray(5);
//⇒ [5, 4, 3, 2, 1]

function makeArray(a) {
  if (a === 1) return [1];
  return [...makeArray(a - 1), a];
}

function makeReverseArray(b) {
  if (b === 1) return [1];
  return [b, ...makeReverseArray(b - 1)];
}

function makeArrayTCO1(n, arr = []) {
  if (n === 0) return [n, ...arr];
  return makeArrayTCO(n - 1, [n, ...arr]); // 재귀 호출이 마지막 작업
}

function makeArrayTCO2(n, arr = []) {
  const t = [n, ...arr];
  if (n === 0) return t;
  return makeArrayTCO2(n - 1, t); // 재귀 호출이 마지막 작업
}

console.log(makeArray(10));
console.log(makeReverseArray(5));
console.log(makeArrayTCO(10));
