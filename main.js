function first(){
    console.log("First");
    second();
    console.log("first ended");
}


function second(){
    console.log("Second");
    third();
    console.log("Second ended");
}

function third(){
    console.log("third")
}

first();


const f1 = () => "1"

const f2 = () => `${f1()} ---> 2`

const f3 = () => `${f2()} ---> 3`

f3()


function recursion() {
    recursion(); 
}

recursion(); 


function first() {
    second();
}

function second() {
    third();
}

function third() {
    throw new Error("Bir xəta baş verdi!");
}

first();
