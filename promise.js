let myPromise = new Promise((resolve, reject) => {
    let succes = true;

    if (succes) {
        resolve("The work completed");
    } else {
        reject("An error occured")
    }
});

console.log(myPromise);


function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Information is coming...");
        setTimeout(() => {
            let succes = true;
            if (succes) {
                resolve("The information arrived successfully.")
            } else {
                reject("Server error.")
            }
        }, 2000);
    });
}



fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error));





async function test() {
    try {
        let nəticə = await prom;
        console.log(nəticə);
    } catch (xəta) {
        console.log("🚨 Səhv oldu:", xəta);
    }
}

test();



const p1 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'one');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 200, "two");
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, "third");
});

const p4 = new Promise((resolve,reject) =>{
    setTimeout(resolve,100,"four");
});


Promise.race([p1,p2,p3,p4]).then(console.log).catch(console.log);