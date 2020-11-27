function fizzBuzz(x) {
    var fizzBuzzy = []
    for (var i = 1; i<=x; i++) {
        if (i % 15 === 0) {fizzBuzzy.push("fizzbuzz <br>")}
        else if(i % 5 === 0) {fizzBuzzy.push("buzz <br>")}
        else if (i % 3 === 0) {fizzBuzzy.push("fizz <br>")}
        else {fizzBuzzy.push(i + "<br>")}
    }
    return fizzBuzzy
}
console.log(fizzBuzz(50))