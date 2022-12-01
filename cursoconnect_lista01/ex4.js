/* 4.	A granja Frangotech possui um controle automatizado de cada frango da sua produção. No pé direito do frango há um anel com um chip de identificação; no pé esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir. Sabendo que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo para calcular o gasto total da granja para marcar todos os seus frangos. */

function ex4(){
var frangos = parseFloat(prompt("Digite a quantidade de frangos: "))
var gasto = parseFloat((frangos * 4) + (frangos * (3.50 * 2)))

alert("A granja deverá gastar um total de " + gasto.toFixed(2) + " reais para marcar todos os seus frangos")
}