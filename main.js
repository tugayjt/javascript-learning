const person = {
    name:"Arif",
    surname:"Aliyev",
    age: 18,
    language: ['AZ','ENG',"RU"],
    sayHi: function(){
        console.log("Hello");
    },
};


person.age;
person.name;


person["sayHi"];

person.language.push("Italian");

person.sayHi();