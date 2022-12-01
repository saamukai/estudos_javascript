/* Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. 
Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, 
calcule e mostre a comissão e o salário final do funcionário. */

function ex15 () {
    salarioFix = parseFloat(prompt("Digite o salario fixo do funcionario"))
    valorVendas = parseFloat(prompt("Digite o valor de vendas que o funcionario fez"))

    salarioFinal = parseFloat(salarioFix+(0.04*valorVendas))

    alert("O funcionario recebera esse mẽs " + salarioFinal.toFixed(2) + " R$")
}
