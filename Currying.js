const add = (a) => (b) => (c) => a + b + c;
console.log(add(2)(3)(4));
console.log(add(5)(3)(4));
console.log(add(3)(3)(4));
console.log(add(4)(3)(4));


function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // 6



function curriedMultiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = curriedMultiply(2); 
console.log(double(3)); // 6
console.log(double(4)); // 8
