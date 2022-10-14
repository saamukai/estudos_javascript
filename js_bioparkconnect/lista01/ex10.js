/* Calcule o volume de uma caixa d'água cilíndrica */

function ex10 () {
    pi = parseFloat(3.14);
    raio = parseFloat(prompt("Digite o raio da caixa dagua"))
    altura = parseFloat(prompt("Digite a altura da caixa"))

    volume = parseFloat(pi*(raio*raio)*altura)
    litro = parseFloat(volume*1000)

    alert("O volume da caixa d'agua é: " + volume.toFixed(2) + " m³ = " + litro.toFixed(2) + " litros")

}