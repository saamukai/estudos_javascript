/* Faça um algoritmo que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas.  */

function ex17 () {
    pesoKg = parseFloat(prompt("Digite o peso da pessoa"))
    pesog = pesoKg*1000

    alert("O peso da pessoa eh " + pesog + " gramas")
}