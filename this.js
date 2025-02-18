const person = {
    name: "Axmed",
    sayHello: function () {
        console.log(this.name);
    }
};

person.sayHello();




function Person(name) {
    this.name = name;
}

const user = new Person("Mehmet");
console.log(user.name);



function sayHeloo() {
    console.log("Hi, " + this.name);
}

const person1 = { name: 'Vuqar' };
sayHeloo.call(person1);


let user1 = {
    name: "Ali",
    sayHi: function () {
        console.log(this.name);
    }
};

user1.sayHi();


let user2 = {
    name: "Ali",
    sayHi: () => {
        console.log(this.name);
    }
};

user2.sayHi();


let name = "Məmməd";

let user3 = {
    name: "Ali",
    sayHi: function () {
        console.log(this.name);
    }
};

user3.sayHi();
