function outerFunction() {
    let outerVar = "Mən xarici dəyişənəm";

    function innerFunction() {
        console.log(outerVar); 
    }

    return innerFunction;  
}

const closureExtample = outerFunction(); 
closureExample(); 


function outerFunction() {
    let outerVar = 'xarici dəyişən';
    
    function innerFunction() {
        console.log(outerVar);   
    }
    
    return innerFunction;
}

const closureFunchtion = outerFunction();
closureFunction();  

function outerFunction() {
    let outerVar = "Mən xarici dəyişənəm";

    function innerFunction() {
        console.log(outerVar); 
    }

    return innerFunction;  
}

const closureExample = outerFunction(); 
closureExample(); 


function outerFunction() {
    let outerVar = 'xarici dəyişən';
    
    function innerFunction() {
        console.log(outerVar);   
    }
    
    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();  

