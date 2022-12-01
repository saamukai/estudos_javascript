/* Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa.
 Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, 
 faça um algoritmo para ler os dados necessários e calcular a altura do prédio. */

function ex8() {
    altura = parseFloat(prompt('Digite sua altura (em metros)'));
    compSombraPerson = parseFloat(prompt('Digite o comprimento da sua sombra (em metros)'))
    compSombraPredio = parseFloat(prompt('Digite o comprimento da sombra do predio (em metros)'))
    
    alturaPredio = (altura*compSombraPredio)/compSombraPerson;

    alert('A altura do predio eh ' + alturaPredio.toFixed(2) + ' metros');
}