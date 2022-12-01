/* Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário, 
calcule e mostre a quantidade de salários mínimos que ganha esse funcionário. */

function ex21 () {
    minimo = Number(prompt("Digite o valor do salario minimo atual"))
    salario = Number(prompt("Digite o valor do salario do funcionarios"))

    qtd = salario/minimo

    alert("O funcionario informado recebe " + qtd + " salarios minimos")
}