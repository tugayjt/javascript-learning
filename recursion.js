function factorial(n) {
    if (n === 1) return 1;  
    return n * factorial(n - 1);
}

console.log(factorial(5));  


function counter() {
    let count = 0;  
  
    return function() { 
        count++;  
        console.log(count);
    };
}

const increment = counter(); 
increment(); 
increment(); 
increment(); 
