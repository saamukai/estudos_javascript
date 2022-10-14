/* Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. Faça um algoritmo para calcular 
quantos litros de água e de suco são necessários para se fazer X litros de refresco (informados pelo usuário). */

function ex9 () {
    suco = parseFloat(prompt('Digite quantos litros de suco deseja fazer'))
    agua = parseFloat((8/10)*suco);
    maracuja = suco - agua;

    alert("Para fazer " + suco + " litros de refresco serao necessarios: \n"
        + agua + " litros de agua\n"
        + maracuja + " litros de maracuja");
}