/* Faça um algoritmo que receba três números, calcule e mostre a multiplicação desses números */

function ex11 () {
    a = parseFloat(prompt("Digite o 1º numero:"));
    b = parseFloat(prompt("Digite o 2º numero"))
    c = parseFloat(prompt("Digite o terceiro numero: "))

    multiplicacao = parseFloat(a*b*c)
    alert("A multiplicacao dos numeros digitados resulta em " + multiplicacao)
}