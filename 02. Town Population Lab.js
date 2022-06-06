

function townPopulation(input) {
    let towns = {};
    for (const el of input) {
        let infoArr = el.split(' <-> ');
        let town = infoArr[0];
        let population = Number(infoArr[1]);
        if (!towns[town]){
            towns[town] = 0;
        }
        towns[town] += population
    }
    for (const town in towns) {
        console.log(`${town} : ${towns[town]}`);
            
        }
    }
    


townPopulation(['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])
