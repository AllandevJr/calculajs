function somar (){
var tn1 = document.querySelector('input#val1')
var tn2 = document.querySelector("input#val2")
var res = document.querySelector('div#res')
var n1 = Number(tn1.value)
var n2 = Number(tn2.value)
var s = n1 + n2
res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}
document.querySelector('input#saida') = res

function forms(){
    var img = document.querySelector('div#formula')
        
    if (n1 + n2){
    img.src = 'soma.png'
} else if(n1 - n2){
    img.src = 'subtracao.png'
} else if (n1 * n2){
    img.src = 'multiplicacao.png'
}else {
    img.src = 'divisao.png'
}}