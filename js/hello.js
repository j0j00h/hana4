console.log("hello world");

let a = 1;
let b = 2;
let c = (a++, b++);
console.log(a, b);
let d = (a--, b + a);
console.log("🚀 a,b,c,d:", a, b, c, d);

d = void (c = a + b);
console.log("🚀 d :", d);

console.log(false === !!null);
