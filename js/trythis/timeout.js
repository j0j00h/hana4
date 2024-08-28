setImmediate(() => console.log("setImmediate", new Date()));
setTimeout(() => console.log("setTimeout", new Date()));
process.nextTick(() => console.log("nextTick"));

// i/o polling
const fs = require("fs"); // CJS
fs.readFile("hello.txt", (result) => {
  setTimeout(() => {
    console.log("setTimeout22");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate22");
  });
  process.nextTick(() => console.log("nextTick22"));
});
