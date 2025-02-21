class Calculator {
    static model = "My Calculator"
    
    static add(a, b) {
        return a + b
    }
  }
  
  const instance1 = new Calculator()
  console.log(instance1.add(2,3)) 
  
  console.log(Calculator.add(2,3)) 
  