/*     16. Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: 
        a. o novo peso se a pessoa engordar 15% sobre o peso digitado;
        b. o novo peso se a pessoa emagrecer 20% sobre o peso digitado */

function ex16() {
    peso = parseFloat(prompt("Digite o peso da pessoa: "))
    
    pesoEngorda = parseFloat(peso+(peso*0.15))
    pesoEmagrece = parseFloat(peso-(peso*0.2))

    alert("O peso da pessoa se ela engordar 15% sera de " + pesoEngorda + " kg\n"
           + "O peso da pessoa se ela emagrecer 20% sera de " + pesoEmagrece + " kg")
}