/* Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário */

function ex22 () {
    numero = Number(prompt("Digite um numero: "))
    var tabuada = ""
    for(let i = 0; i<=10; i++){
        tabuada = tabuada + (numero + " x " + i + " = " + (numero*i) + "\n")
    }

    alert(tabuada)
}