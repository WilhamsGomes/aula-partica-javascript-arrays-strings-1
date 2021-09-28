var valorA = "casa"
var valorB = "asa"

var valorA = valorA.toUpperCase();
var valorB = valorB.toUpperCase();

console.log(valorA +" | "+ valorB)

var quantidadeA = valorA.length
var quantidadeB = valorB.length

if (quantidadeA == quantidadeB){
    console.log(true)
    return true
} else {
    console.log(false)
    return false
}