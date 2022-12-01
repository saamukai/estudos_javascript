/* Faça um algoritmo que calcule e mostre a área de um quadrado. Sabe-se que: A = lado * lad */

function ex19 () {
    lado = parseFloat(prompt("Digite o lado do quadrado em cm"))
    area = parseFloat(lado*lado)

    alert("A area do quadrado eh " + area + " cm²")
}