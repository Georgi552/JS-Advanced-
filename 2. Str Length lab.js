function printIteslf(param1, param2, param3) {
    console.log(param1.length + param2.length + param3.length)

    let len1 = param1.length
    let len2 = param2.length
    let len3 = param3.length
    let averageLength = (len1 + len2 + len3) / 3
    console.log(Math.floor(averageLength))
}

printIteslf('pasta', '5', '22.3')