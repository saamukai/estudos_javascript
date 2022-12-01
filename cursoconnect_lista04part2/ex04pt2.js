const idosos = [
    {id:0, nome:"genoveva", idade: "65", vivo:true},
    {id:1, nome:"creitons", idade: "58", vivo:true},
    {id:2, nome:"genival", idade: "81", vivo:false},
    {id:3, nome:"irineu", idade: "60", vivo:null},
    {id:4, nome:"iracema", idade: "32", vivo:true},
    {id:5, nome:"mirileu", idade: "85", vivo:false},
    {id:6, nome:"virmondo", idade: "123", vivo:true},
    {id:7, nome:"vinhado", idade: "12", vivo:false},
    {id:8, nome:"Lindomar", idade: "60", vivo:true},
    {id:9, nome:"celestino", idade: "68", vivo:true},
    {id:10, nome:"felisberg", idade: "72", vivo:false},
    {id:11, nome:"eunice", idade: "67", vivo:true},
    {id:12, nome:"josefina", idade: "92", vivo:true},
    {id:13, nome:"virosvaldo", idade: "12", vivo:false},
    {id:14, nome:"masteromio", idade: "85", vivo:false}
]

// EXERCICIO 05
const idososDiv = document.getElementById("idosos")
idososDiv.innerText=idosos[6].nome

// EXERCICIO 06
const elemento = document.getElementById("divfilho")
elemento.innerText="elemento criado"
idososDiv.appendChild(elemento)

//EXERCICIO 07
elemento.innerText+=`\nA pessoa sábia com idade avançada com o nome: ${idosos[7].nome} está com ${idosos[7].idade} anos, e é ${idosos[7].vivo} a informação de que ele está vivo`

//EXERCICIO 08
function escreveIdoso () {
    for(let i=0; i<idosos.length; i++) {
        const listaIdosos = document.createElement("li");
        const addTexto = document.createTextNode(`A pessoa sábia com idade avançada com o nome: ${idosos[i].nome} está com ${idosos[i].idade} anos, e é ${idosos[i].vivo} a informação de que ele está vivo`);
        listaIdosos.appendChild(addTexto);
        elemento.appendChild(listaIdosos);
    }
}
escreveIdoso();

//EXERCICIO 09
function escreveIdosoVelho60 () {
    for(let i=0; i<idosos.length; i++) {
        if (idosos[i].idade > 60) {
            const listaIdosos = document.createElement("ol");
            const addTexto = document.createTextNode(`A pessoa sábia com idade avançada com o nome: ${idosos[i].nome} está com ${idosos[i].idade} anos, e é ${idosos[i].vivo} a informação de que ele está vivo`);
            listaIdosos.appendChild(addTexto);
            elemento.appendChild(listaIdosos);
        }
    }
}

escreveIdosoVelho60();