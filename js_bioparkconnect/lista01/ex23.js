/*    22. Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
a. a idade dessa pessoa em anos;
b. a idade dessa pessoa em meses; 
c. a idade dessa pessoa em dias
d. a idade dessa pessoa em semanas.  */

function ex23 () {

    anoAtual = Number(prompt("Digite o ano atual"))
    anoNascimento = prompt("Digite o ano do seu nascimento (DD/MM/AAAA)")

    nascimento = anoNascimento.split("/")

    idadeAnos = parseInt(anoAtual - nascimento[2])
    idadeMeses = Number(idadeAnos * 12)
    idadeDias = Number(idadeAnos*365)
    idadeSemanas = Number(idadeDias/7)

    alert("A idade é representada como:\n"
           +"Em anos: " + idadeAnos + " anos" +
            "\nEm meses: " + idadeMeses + " meses" +
            "\nEm dias: " + idadeDias + " dias" +
            "\nEm Semanas: " + idadeSemanas.toFixed(2) + " semanas")
    
}

