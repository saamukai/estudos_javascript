/* 6.	A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou. */


function ex6() {
let lata = parseInt(prompt("Digite a quantidade de latas 350ml que ira comprar"))
let r600 = parseInt(prompt("Digite a quantidade de 600ml que irá comprar"))
let r2l = parseInt(prompt("Digite a quantidade de 2litros que irá comprar"))

let totalMl = parseFloat((lata * 350) + (r600 * 600) + (r2l * 2000))
let totalL = parseFloat(totalMl / 1000)

alert("Vai comprar de um total de " + totalL + " litros")

}