let num = 123;
let str = String(num);  // "123"
console.log(typeof str); // "string"



let string = num.toString(); // "123"
console.log(typeof string); // "string"


let str2 = "456";
let num2 = Number(str); // 456
console.log(typeof num); // "number"


let bool1 = Boolean(1); // true
let bool2 = Boolean(0); // false
let bool3 = Boolean(""); // false
let bool4 = Boolean("Hello"); // true


let t = "100px";
let n = parseInt(t); // 100
console.log(n); // 100


let jsonString = '{"name": "Ali", "age": 25}';
let obj = JSON.parse(jsonString);
console.log(obj.name); // "Ali"
console.log(obj.age); // 25


