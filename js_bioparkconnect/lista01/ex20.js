/* Faça um algoritmo que calcule e mostre a área de um losango. Sabe-se que: A = (diagonal_maior * diagonal_menor)/2 */

function ex20 () {
    diagonalM = parseFloat(prompt("Digite a medida da diagonal maior do losango"))
    diagonal = parseFloat(prompt("Digite a medida da diagonal menor do losango"))

    area = parseFloat((diagonalM*diagonal)/2)
    alert("A area do lansango é de " + area + " cm²")
}