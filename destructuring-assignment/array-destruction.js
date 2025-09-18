const numbers = [10, 20, 30, 40, 50];
//basic  destructuring
const [a,b] = numbers;
console.log(a); // 10
console.log(b); // 20

//skipping values
const [, , y] = numbers;
console.log(y); // 30

//using rest operator
const [x, ...rest] = numbers;
console.log(x); // 10
console.log(rest); // [20, 30, 40, 50]