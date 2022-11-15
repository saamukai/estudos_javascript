
const numero = Number(prompt("Digite um numero: "))
const numUser = document.getElementById('numUser')
const texto = document.getElementById('texto') 

numUser.innerHTML = numero;
texto.innerHTML += `A raiz quadrada do numero: ${numero**(1/2)}<br>`
texto.innerHTML += `O Numero é inteiro: ${Number.isInteger(numero)}<br>`
texto.innerHTML += `O Numero é NaN: ${Number.isNaN(numero)}<br>`
texto.innerHTML += `O Numero arredondado para cima: ${Math.ceil(numero)}<br>`
texto.innerHTML += `O Numero arredondado para baixo:  ${Math.floor(numero)}<br>`
texto.innerHTML += `O Numero com duas casas decimais: ${numero.toFixed(2)}<br>`

