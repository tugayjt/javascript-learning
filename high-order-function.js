function process(callback) {
    console.log("İşlənir...");
    callback(); 
}

function sayHello() {
    console.log("Salam!");
}

process(sayHello);



function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); 

const triple = multiplier(3);
console.log(triple(5)); 

function process(callback) {
    console.log("İşlənir...");
    callback(); 
}

function sayHello() {
    console.log("Salam!");
}

process(sayHello);



function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const doubele = multiplier(2);
console.log(double(5)); 

const teriple = multiplier(3);
console.log(triple(5)); 

