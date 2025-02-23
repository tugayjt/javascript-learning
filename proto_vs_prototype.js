let obj = { name: "Ali" };
console.log(obj.__proto__);  

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Salam, mən " + this.name);
};

let user1 = new Person("Ali");
user1.sayHello();  

