/*var pos = 0
var a = 12 
var numeros = []
for (a ; a > pos ; a--) {
   numeros.push(a)
}
console.log(numeros)*/
/*function compare(a,b) {
    if (a > b ){
        return 1
    }
    else if (a < b ) {
        return -1
    }
    else {
        return 0
    }
}
var itens = [ 0,5,2,9,10,20,33]
itens.sort(compare)
console.log(itens)
console.log(itens[6])
console.log(itens.length)*/


var itens = [ 0,5,2,9,10,20,33]
var soma = 0
for(var n = 0; n <= Number(itens.length) - 1; n++){
    soma += itens[n]
}
console.log(soma)