/* 2.	Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. Faça um algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit (pesquise como fazer este tipo de conversão). */

function ex2() {
    var celsius = parseFloat(prompt("Digite uma temperatura: "));
    var farenheit = 1.8 * celsius + 32;
    var kelvin = celsius + 273.15;

    alert("A temperatura digitada em Farenheit: " + farenheit +
        "\nA temperatura digita em Kelvin: " + kelvin);
}