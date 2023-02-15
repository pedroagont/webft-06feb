// SYNC
// console.log(1);

// for (let i = 0; i < 10000000000; i++) {
//   // imagine something huge happens here!
// }

// console.log(2);
// console.log(3);

// ASYNC
const myVar = 123;
console.log(1);

setTimeout(() => {
  for (let i = 0; i < 10000000000; i++) {
    // imagine something huge happens here!
  }
  console.log(2);
}, 3000);

console.log(3);
