class Car{
    make;
    model;
    year;

        constructor(make,model,year){
            this.make = make;
            this.model = model;
            this.year = year;
        }
}


const tesla = new Car("Tesla","Model_3","")

// class Car{
//     make;
//     model;
//     year;

//         constructor(make,model,year){
//             this.make = make;
//             this.model = model;
//             this.year = year;
//         }
// }


// const tesla = new Car("Tesla","Model_3","")



class Car {

    constructor(color, speed) {
      this.color = color; 
      this.speed = speed; 
    }
  
    
    drive() {
      console.log(`Bu maşın ${this.speed} sürətlə gedir.`);
    }
  
    stop() {
      console.log("Maşın dayandı.");
    }
  }


const myCar = new Car("goy",120);

console.log(myCar.color);
console.log(myCar.speed);
myCar.drive();
myCar.stop();