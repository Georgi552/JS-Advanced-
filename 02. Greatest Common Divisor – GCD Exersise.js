function greatestDevisor(num1, num2) {
    while(num1) {
        let t = num1;
        num1 = num2 % num1;
        num2 = t;
    }
        console.log(num2); 
   
}


greatestDevisor(2154, 458)