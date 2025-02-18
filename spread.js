const numbers = [1,2,3];
console.log(...numbers)


const orginal = [2,4,6,8,10];
const copy = [...orginal];
console.log(orginal)


const arr1 = [1,3,5,9];
const arr2 = [2,4,6,8];

const merged = [...arr1,...arr2];
console.log(merged)


const user = {name:"Ali",surname:"Xasanov"};
const copyuser = {...user};
console.log(copyuser)



function sum(a,b,c){
    return a + b + c;
}

const t = [1,2,3]
console.log(sum(...numbers));