console.log("sum");

console.log(process.argv);
const [, , a, b] = process.argv;
console.log(a, b);
// console.log(num);
const sum = (a, b) => a + b;

console.log(sum(parseInt(a), parseInt(b)));

console.log(sum(+a, +b));

console.log(global);
