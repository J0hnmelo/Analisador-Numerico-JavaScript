/*
id input = i-numeros
function adicionar()
select id = i-recebedorNumerico
function verificarNumeros()
article id = res
*/

let num = window.document.getElementById('i-numeros')
let seletor = window.document.getElementById('i-recebedorNumerico')
let respostas = window.document.getElementById('res')
let valores = []
function adicionar() {
    if (num.value <= 0 || num.value >= 101){
        window.alert('[ERROR] Valor invalido')
    } else if (num.value == NaN || valores.indexOf(Number(num.value)) != -1) {
        window.alert('[ERROR] Valor ja adicionado')
    }
    else{
        var item = window.document.createElement('option')
        item.text = `Você adicionou ${num.value}`
        seletor.appendChild(item)
        valores.push(Number(num.value))
    }
    respostas.innerHTML = ''
    num.value = ''/*deixa o valor vazio apos adicionar */
    num.focus() /*deixa o cursor dentro do input */
} 

function verificarNumeros() {
    if (valores == ''){
        window.alert('[ERROR]Adicione Valores')
    }else {
    function compare(a,b) {
        if (a > b ){
            return 1
        }
        if (a < b ) {
            return -1
        }
        else {
            return 0
        }
    }
    valores.sort(compare)
    
    
    /*Aqui faz aparecer a quantidade de elementos inseridos no array valores*/
    var quantidade = window.document.createElement('p')
    quantidade.innerHTML = `Você adicinou ${valores.length} valores `
    respostas.appendChild(quantidade)

    /*Aqui faz aparecer o maior valor  inserido no array valores*/
    var maior = window.document.createElement('p')
    maior.innerHTML = `O maior valor escolhido foi ${valores[Number(valores.length)- 1 ]}`
    respostas.appendChild(maior)

    /*Aqui faz aparecer o menor valor  inserido no array valores*/
    var menor = window.document.createElement('p')
    menor.innerHTML = `O menor valor escolhido foi ${valores[0]}`
    respostas.appendChild(menor)

    /*Aqui faz aparecer a soma dos valores  inseridos no array valores*/
    var soma = 0
    for(var n = 0; n < Number(valores.length); n++){
        soma += valores[n]
    }
    var somado = window.document.createElement('p')
    somado.innerHTML= `A soma dos valores é ${soma}`
    respostas.appendChild(somado)

    /*Aqui faz aparecer a média aritimetica dos valoers inseridos no array valores*/
    var médiaArit = Number(soma)/Number(valores.length)
    var média = window.document.createElement('p')
    média.innerHTML=`A média dos valores é ${médiaArit}`
    respostas.appendChild(média)

}





















    /*var soma = (Number(valores[0]) + Number(valores[ Number(valores.length) - 1])) * Number(valores.length)/2 
    var resultadoSoma = window.document.createElement('p')
    resultadoSoma.innerHTML = `A soma de todos os valores é ${soma}`
    respostas.appendChild(resultadoSoma)*/








}















