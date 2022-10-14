/* Faça um algoritmo que receba dois números, calcule e mostre a divisão do primeiro número pelo segundo. 
Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações. */

function ex12 () {
    num1 = parseFloat(prompt("Digite o 1º número: "))
    do {
    num2 = parseFloat(prompt("Digite o 2º numero: "))
    
    if (num2 == 0) {
        alert("Digite um numero diferente de zero")
    }
    } while (num2==0);

    divisao = num1/num2;
    alert("O valor da divisao eh: " + divisao)
}