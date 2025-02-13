const arr = ["python", "c++"];

arr.push("java");

arr.pop();

arr.shift();

arr.unshift();

const number = [1, 2, 3, 4, 5];
const doubled = number.map(num => num * 2);
console.log(doubled)



const numbers = [2, 5, 6, 9];
const double = numbers.map(num => num * 2);
console.log(double)

let words = ["apple", "cat", "banana", "dog"];
let longWords = words.filter(word => word.length > 4);

console.log(longWords); // ["apple", "banana"]


let people = [
    { name: "Tugay", age: 21 },
    { name: "Revan", age: 24 },
    { name: "Ayxan", age: 15 },
    { name: "Vusale", age: 10 }
]

let adults = people.filter(person => person.age >= 13);

console.log(adults);


let numberr = [10, 55, 85, 87, 99];
let BigNumbers = numberr.filter((num) => num > 50);
// console.log(BigNumbers)

console.log(a)


let z = [1, 2, 3, 4, 50];
z.reverse();
console.log(z);


console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].reverse())



let a = [8, 55, 1, 47, 6, 35, 9, 2];
a.sort();
console.log(a);



let txt = "Hello World";
let word = txt.split(' ');
console.log(word)


let fruits = "apple,cherry,banana"
let common = fruits.split(",");
console.log(fruits);


let letters = ["h", "e", "l", "l", "o"];
console.log(letters.join(""));
