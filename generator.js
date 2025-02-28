function* say (){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}


const generator = say();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);



function* greet(){
    const name = yield "Enter your name: "
    yield `Hello, ${name}`;


}

console.log(generator.next().value);
console.log(generator.next("Tugay").value);