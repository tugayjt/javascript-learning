let x = [1, 2, 3, 4, 5];
let s = x.reduce((x, s) => x + s, 0);
// console.log(s)


let ededler = [1, 2, 2, 3, 4, 4, 5, 8, 92];
let ededler2 = [1, 2, 2, 3, 4, 1, 4, 5, 6, 32];
let a = []
let b = {}
for (let i = 0; i < ededler.length; i++) {
    for (let j = 0; j < ededler2.length; j++) {
        if(ededler[i] === ededler2[j]){
            break;
        }
        else{
            a.push(ededler[i]);
            break;
        }
    }
}
console.log(a)

