let obj = { name: "Ali" };
console.log(obj.__proto__);

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log("Salam, mən " + this.name);
};

let user1 = new Person("Ali");
user1.sayHello();





let animal = {
    eats: true,
    sleep: function () {
        console.log("Sleeping...");
    }
};

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal

console.log(rabbit.eats);
rabbit.sleep();
console.log(rabbit.jumps);





class Animal {
    constructor(name) {
        this.name = name;
    }
    sleep() {
        console.log(this.name + "   sleeping...");
    }
}


class Rabbit extends Animal {
    jump() {
        console.log(this.name + " jumping!")
    }
}

let bunny = new Rabbit("Sweet")

bunny.sleep();
bunny.jump();