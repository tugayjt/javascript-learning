const arr = ["AZ", "TR", "RU", "LV"];
const person = { name: "Tugay", surname: "Jabbarov" };

for (let i = 0; i < arr.length; i++) {
    console.log(`index = ${i},value = ${arr[i]}`);
}


for (const item of arr) {
    console.log(item);
}


for (const key in person) {
    console.log(person[key]);
}