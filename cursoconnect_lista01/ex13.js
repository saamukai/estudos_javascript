/* Faça um algoritmo que receba duas notas, 
calcule e mostre a média ponderada dessas notas, considerando peso 2 para a primeira nota e peso 3 para a segunda nota. */

function ex13 () {
    let leitura = [] = prompt("Digite duas notas (separadas por virgula: nota1, nota2")
    let notas = leitura.split(",");
    parseFloat(notas);

    let soma = parseFloat(notas[0]) + parseFloat(notas[1]);
    let media = soma/2;

    alert("A media do aluno eh " + media.toFixed(2));
}