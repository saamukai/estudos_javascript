/* Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. 
Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado, em reais. 
Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não havendo moeda de um tipo, 
a quantidade respectiva é zero.  */


function ex7() {
    moeda1c = parseFloat((prompt("Digite a quantidade de moedas de 1 centavo"))*0.01)
    moeda5c = parseFloat((prompt("Digite a quantidade de moedas de 5 centavos"))*0.05)
    moedas10c = parseFloat((prompt("Digite a quantidade de moedas de 10 centavos"))*0.10)
    moedas25c = parseFloat((prompt("Digite a quantidade de moedas de 25 centavos"))*0.25)
    moedas50c = parseFloat((prompt("Digite a quantidade de moedas de 50 centavos"))*0.50)
    moedas1r = parseFloat((prompt("Digite a quantidade de moedas de um real")))

    reais = moeda1c + moeda5c + moedas10c + moedas25c + moedas50c + moedas1r;
    
    alert('Valor das moedas em reais: ' + reais + '\n');
    
}