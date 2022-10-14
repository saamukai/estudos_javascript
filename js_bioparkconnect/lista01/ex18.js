/* Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (base maior + base menor)* altura)/2  */

function ex18 () {
    baseM = parseFloat(prompt("Digite a base maior do trapezio em cm"))
    base = parseFloat(prompt("Digite a base menor do trapezio em cm"))
    altura = parseFloat(prompt("Digite a altura do trabezio em cm"))
    area = ((baseM + base)* altura)/2

    alert("A area do trapezio eh de " + area + " cm2")
}