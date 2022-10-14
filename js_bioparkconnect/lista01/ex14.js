/* Faça um algoritmo que receba o preço de um produto, calcule e mostre o novo preço, sabendo-se que este
sofreu um desconto de 10% */

function ex14 () {
    preco = prompt("Digite o preco do produto")
    nPreco = parseFloat(preco-(preco*0.1))
    alert("O novo preco é " + nPreco + " R$")
}

