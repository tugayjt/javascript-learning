for (var i = o; i < 3; i++) {
    setTimeout(() => console.log(i), 100)
}


for (let i = 0; i < 3; i++) {
    (
        (j) => {
            setTimeout(() => console.log(j), 100)
        }
    )(i)
}