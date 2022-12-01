/* 1.	A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hamburguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduiches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra.  */
function ex1() {

function calculalPeso(x) {

    var hamburguer = {
        queijo: x * 50,
        pres: x * 50,
        carne: x * 100
    }

    hamburguer.queijo /= 1000;
    hamburguer.pres /= 1000;
    hamburguer.carne /= 1000;

    return hamburguer;
}

    let quantidade = prompt("Digite a quantidade de hamburguer que deseja fazer: ");
    var hamburguer = calculalPeso(quantidade);
    
    alert("Você vai precisar de " + hamburguer.queijo + " kg de queijo\n");
    alert("Você vai precisar de " + hamburguer.pres + " kg de presunto\n");
    alert("Você vai precisar de " + hamburguer.carne + " kg de hamburguer\n");

}