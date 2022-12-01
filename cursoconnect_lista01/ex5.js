/* 5.	Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos. Faça um algoritmo para calcular quantos novelos de lã ela gasta por blusa. */

function ex5() {
let blusas = parseInt(prompt('Digite a quantidade de blusas que ira produzir'))
// Considerando que cada blusa gasta 2.5 novelos de lã

let novelos = parseFloat(2.5 * blusas)

alert("Irá precisar de " + novelos + " novelos de lã para produzir " + blusas + " blusas\n"
    + "(considerando que cada blusa gasta 2.5 novelos)" )
}