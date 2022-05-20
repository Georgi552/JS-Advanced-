function laskK(n, k) {
   
    let result = [];
    result.push(1);
    while (result.length < n) { 
        let toAdd = 0;
        for (let i = 1; i <= k; i++) {
             
            if (result[result.length - i] != undefined){
                toAdd += result[result.length - i];
            }
        }
    result.push(toAdd)    
    }

return result;
}

console.log(laskK(6, 3));
console.log(laskK(8, 2));