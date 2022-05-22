function solve(arr, str) { 
    let result = '';
    for (let i = 0; i < arr.length; i++){
        result += arr[i];
        if (i < arr.length - 1){
            result += str;
        }
        
    }
    console.log(result)
}

solve(['One',

'Two',

'Three',

'Four',

'Five'],

'-')