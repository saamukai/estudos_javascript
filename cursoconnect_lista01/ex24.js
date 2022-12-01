/* João recebeu seu salário de R$ 1200,00 e precisa pagar duas contas (C1=R$ 200,00 e C2=R$120,00) que estão atrasadas. 
Como as contas estão atrasadas, 
João terá de pagar multa de 2% sobre cada conta. 
Faça um algoritmo que calcule e mostre quanto restará do salário do João  */

function ex24 () {
    var salarioJoao = 1200.00;
    var c1 = 200.00;
    var c2 = 120.00;

    jurosC1 = 0.02*c1;
    jurosC2 = 0.02*c2;
    
    c1 = parseFloat(c1+jurosC1)
    c2 = parseFloat(c2+jurosC2)
    
    salarioJoao = salarioJoao-c1-c2;
    alert("João recebe 1200 reais\n" +
            "João tera que pagar de juros: \n" +
            "Na c1: " + jurosC1.toFixed(2) + " reais\n" +
            "Na c2: " + jurosC2.toFixed(2) + " reais\n\n" +
            "Assim, as contas serao pagas nos valores de: \n" +
            "Conta 1: " + c1 + " reais\n" +
            "Conta 2: " + c2 + " reais\n\n" +
            "Restará " + salarioJoao + " reais do salário de João")
}