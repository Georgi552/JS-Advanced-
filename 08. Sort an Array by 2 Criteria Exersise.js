function solve(arr) {
    
    arr.sort((a, b) => { 
       return a.length - b.length || a.localeCompare(b);
    });
    
    return arr.join('\n')

}

console.log(solve(['alpha','beta','gamma']));
console.log(solve(['Isacc', 'Theodor','Jack', 'Harrison', 'George']));
console.log(solve(['test', 'Deny', 'omen', 'Default']));