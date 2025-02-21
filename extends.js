class Person{
    fullname
    age
    introduce(){
        console.log("This is me")
    }
}

class Student extends Person{
    grade
}

class Employee extends Person{
    salary
}


const Person1 = new Person()
const Student1 = new Student()
const Employee1 = new Employee()


console.log(Person1.introduce())
console.log(Student1.introduce())
console.log(Employee1.introduce())



class Animal{
    name 
    age
    makesound(){
      console.log("Some generic animal sound")
    }
  }
  
  class Dog extends Animal{
    breed
  }
  
  class Cat extends Animal{
    color
  }
  
  const animal = new Animal()
  const dog = new Dog()
  
  
  
  console.log(animal1.makeSound()) 
  console.log(dog1.makeSound())    
  console.log(cat1.makeSound())