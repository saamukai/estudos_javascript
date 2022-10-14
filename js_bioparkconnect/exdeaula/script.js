
let peso, altura, imc, nome;
let pessoa = [];

function calculaImc(nome, peso, altura) {
    imc = peso / (altura * altura);
    
    if (imc < 18.5)
        alert("o IMC " + imc + " da pessoa: " + nome + " está abaixo do normal");
    else if (imc >= 18.5 && imc <= 24.9)
        alert("o IMC " + imc + " da pessoa: " + nome + " está normalizado");
    else if (imc >= 25.0 && imc <= 29.9)
        alert("o IMC " + imc + " da pessoa: " + nome + " acima do normal, excesso de peso");
    else if (imc >= 30.00 && imc <= 34.9)
        alert("o IMC " + imc + " da pessoa: " + nome + " acima do normal, obesidade de classe 1");
    else if (imc >= 35.5 && imc <= 39.9)
        alert("o IMC " + imc + " da pessoa: " + nome + " acima do normal, obesidade de classe 2");
    else if (imc >= 40.0)
        alert("o IMC " + imc + " da pessoa: " + nome + " acima do normal, obesidade de classe 3");
}
        
do {
    nome = prompt("Digite seu nome (Caso queira sair digite um 1)");

    if (nome == 1)
        break;
    
    altura = prompt("Digite a sua altura");
    peso = prompt("Digite seu peso");

    calculaImc(nome, peso, altura);
    pessoa.push(nome);

} while (nome != 0);

alert(pessoa);