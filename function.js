function greet() {
    console.log("Hello world");
}

greet()

greet()

greet()


function sum(a, b) {
    console.log(a + b)
    console.log(a - b)
}

sum(5, 6)


function sum(a, b, c) {
    console.log(a + b + c)
    console.log(a - b)
}

sum(5, 6, 4)
sum(4, 5, 5)



function sum(a, b, c) {
    const z = a + b + c;
    console.log(z);
}

sum(5, 6, 4)
sum(4, 5, 5)


function sum(a, b, c) {
    const z = a + b + c;
    return z
}

const z = sum(5, 6, 4);
console.log(z)


function score(math, english, native) {
    const first = math + english + native;
    return first
}

const first = score(67, 56, 78)
console.log(first)


function score2(geography, math, history) {
    const second = geography + math + history;
    return second
}

const second = score2(112, 73, 76)
console.log(second)


function sum(a, b, c) {
    return a + b + c;
}

const result = sum(5, 8, 2.5);
console.log(result)


function getArray() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return arr
}

const end = getArray();
console.log(result);


function checkNumber(n) {
    if (n > 10) {
        return "Number is greater than 10";
    }
    return "Number is 10 or less";
}

console.log(checkNumber(1));
console.log(checkNumber(55));



