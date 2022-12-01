/* Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa. */

function ex25 () {
    cateto1 = Number(prompt("Digite o valor do primeiro cateto"))
    cateto2 = Number(prompt("Digite o valor do segundo cateto"))

    hipotenusa = parseFloat((cateto1*cateto1) + (cateto2*cateto2))
    hipotenusa = parseFloat(Math.sqrt(hipotenusa))

    alert("A hipotenusa do triangulo mede: " + hipotenusa.toFixed(2))
}