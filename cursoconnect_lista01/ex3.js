/* 3.	A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos. */

function ex3() {
var extras = prompt("Digite a quantidade de horas extras trabalhadas")
var horas = prompt("Digite a quantidade de horas normal trabalhadas: ")

var salario = parseFloat((horas * 10) + (extras * 15))
var salarioLiq = parseFloat(salario-(salario * 0.1))

alert("O salario bruto do funcionario eh: " + salario.toFixed(2) +
    "\nO salario liquido do funcionar eh: " + salarioLiq.toFixed(2))

}