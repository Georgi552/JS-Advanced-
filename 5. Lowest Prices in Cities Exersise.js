function solve(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        
        let text = input[i];
        let productInfo = text.split(" | ");
        
        let town = productInfo[0];
        let product = productInfo[1];
        let price = Number(productInfo[2]);

        if (!obj.hasOwnProperty(product)) {
            obj[product] = {price, town};
        } 
        else {
            if( price < obj[product].price){
                obj[product] = {price, town};
            }
        }

        
    }
    let productNames = (Object.keys(obj));

    for (let i = 0; i < productNames.length; i++) {
        let el = productNames[i];
        console.log(`${el} -> ${obj[el].price} (${obj[el].town})`);
        
    }

}




solve(["Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999"]);