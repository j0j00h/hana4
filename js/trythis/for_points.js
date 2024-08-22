//1.
for (let i = 0.1; i < 1; i = i + 0.1) {
  // console.log(i);
  console.log(Number(i.toFixed(1)));
}

console.log("----------------------");

//2.
for (let i = 1; i <= 10; i += 1) {
  j = Math.sqrt(i).toFixed(3);
  if (Math.round(j) == j) continue;
  else {
    console.log(i, j);
  }
}

console.log("----------------------");

//3.
const WEEK_NAMES = "일월화수목금토";
const today = new Date();
const day = today.getDay();

switch (day) {
  case 0:
    console.log(`오늘은 ${WEEK_NAMES[0]}요일입니다.`);
    break;
  case 1:
    console.log(`오늘은 ${WEEK_NAMES[1]}요일입니다.`);
    break;
  case 2:
    console.log(`오늘은 ${WEEK_NAMES[2]}요일입니다.`);
    break;
  case 3:
    console.log(`오늘은 ${WEEK_NAMES[3]}요일입니다.`);
    break;
  case 4:
    console.log(`오늘은 ${WEEK_NAMES[4]}요일입니다.`);
    break;
  case 5:
    console.log(`오늘은 ${WEEK_NAMES[5]}요일입니다.`);
    break;
  case 6:
    console.log(`오늘은 ${WEEK_NAMES[6]}요일입니다.`);
    break;
}

console.log(`오늘은 ${[WEEK_NAMES][day]}요일입니다.`);

console.log("----------------------");

//4.
function pointLength(x) {
  x.toString().split(".")[1].length;
}
function addPoints(a, b) {
  const x = pointLength(a) >= pointLength(b) ? pointLength(a) : pointLength(b);
  const sum = a + b;
  return sum.toFixed(x);
}

console.log(addPoints(0.21354, 0.1)); // 0.31354
console.log(addPoints(0.14, 0.28)); // 0.42
console.log(addPoints(0.34, 0.226)); // 0.566

console.log("----------------------");

//5.
function printIrr(a) {
  do {
    console.log(a, Math.sqrt(a).toFixed(3));
    a += 1;
  } while (Math.sqrt(a) !== Math.trunc(Math.sqrt(a)));
}

printIrr(5);
printIrr(9);
