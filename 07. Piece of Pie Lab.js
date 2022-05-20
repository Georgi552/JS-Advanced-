function solve(arr, string1, string2) { 
    let startIndex = arr.indexOf(string1);
    let endIndex = arr.indexOf(string2);
    let newPie = arr.slice(startIndex, endIndex + 1);
    return newPie;
}

solve(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie');