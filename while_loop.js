let c = 10;
while (i < 5) {
    console.log(c);
    c++;
}



let a = 12;
do {
    console.log(a);
    i++;
} while (i <= 5)

const arr = ["AZ", "TR", "RU", "LV"];
const person = { name: "Tugay", surname: "Jabbarov" };

let i = 0;
while( i < arr.length){
    console.log(`index = ${i},arr= ${arr[i]}`)
    i++;
    }



let fruits = ["apple","bananas","cherry","strowbery"]
for (let fruit of fruits){
console.log(fruit)
}     

let telebe = { ad: "Eli", yas: 20, universitet: "OYU" };

for (let acar in telebe) {
    console.log(acar + ": " + telebe[acar]);
}
