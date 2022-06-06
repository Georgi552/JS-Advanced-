function solve(input){
    let result = [];
    for (const el of input) {
        let name = el.split(" / ")[0];
        let level = Number(el.split(" / ")[1]);
        let items;
        if ((el.split(" / ")[2]).length > 0) {
            items = el.split(" / ")[2].split(", ")
        
        } 
        else if ((el.split(" / ")[2]).length = 0) {
            items = el.split(" / ")[2];
        }
        
        result.push({name, level, items});
    }

    console.log(JSON.stringify(result));
}


(solve(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / ']));