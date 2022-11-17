const idosos = [
    { id: 0, nome: "genoveva", idade: "65", vivo: true },
    { id: 1, nome: "creitons", idade: "58", vivo: true },
    { id: 2, nome: "genival", idade: "81", vivo: false },
    { id: 3, nome: "irineu", idade: "60", vivo: null },
    { id: 4, nome: "iracema", idade: "32", vivo: true },
    { id: 5, nome: "mirileu", idade: "85", vivo: false },
    { id: 6, nome: "virmondo", idade: "123", vivo: true },
    { id: 7, nome: "vinhado", idade: "12", vivo: false },
    { id: 8, nome: "Lindomar", idade: "60", vivo: true },
    { id: 9, nome: "celestino", idade: "68", vivo: true },
    { id: 10, nome: "felisberg", idade: "72", vivo: false },
    { id: 11, nome: "eunice", idade: "67", vivo: true },
    { id: 12, nome: "josefina", idade: "92", vivo: true },
    { id: 13, nome: "virosvaldo", idade: "12", vivo: false },
    { id: 14, nome: "masteromio", idade: "85", vivo: false  }
]


/* Questão 2
a) Imprime no console o nome de todos os idosos
b) Retorna em um vetor o nome de todos os idosos
c) Retorna em um vetor o nome de todos os idosos com idades maior que 70 anos
*/

/* Questão 3 */
let botaoex03 = document.getElementById('ex03')
let botaoex04a = document.getElementById('ex04a')
let botaoex04b = document.getElementById('ex04b')
let botaoex04c = document.getElementById('ex04c')
botaoex03.addEventListener('click', ex03)
botaoex04a.addEventListener('click', ex04a)
botaoex04b.addEventListener('click', ex04b)
botaoex04c.addEventListener('click', ex04c)

function ex03()
{
    console.log(idosos)
}

function ex04a () {
    idosos.forEach(function(item){
        if (item.vivo == true) {
            console.log(item)
        }
    })       
}

function ex04b () {
    idosos.forEach(function(item){
        if (item.vivo == false) {
            console.log(item)
        }
    })       
}

function ex04c () {
    idosos.forEach(function(item){
        if (item.idade < 70) {
            console.log(item)
        }
    })       
}

