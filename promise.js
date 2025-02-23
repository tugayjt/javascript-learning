let myPromise = new Promise((resolve,reject) => {
    let succes = true;

    if (succes){
        resolve("The work completed");
    } else{
        reject("An error occured")
    }
});

console.log(myPromise);


function fetchData(){
    return new Promise((resolve,reject) => {
        console.log("Information is coming...");
        setTimeout(() => {
            let succes = true;
            if (succes){
                resolve("The information arrived successfully.")
            } else{
                reject("Server error.")
            }
        },2000);
    });
}



fetchData()
.then(data  => console.log(data))
.catch(error => console.log(error));
