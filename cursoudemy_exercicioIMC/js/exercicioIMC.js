const form = document.querySelector("#formulario"); // seleciona o form com query

form.addEventListener('submit', function(e) { // e == evento, event
	e.preventDefault(); // previnir evento padrão (atualizar a pagina )

	const peso = Number(e.target.querySelector("#peso").value);
	const altura = Number(e.target.querySelector("#altura").value);

	if (!peso) {
		setResultado('Peso Inválido', false);
	}
	if (!altura) {
		setResultado('Altura Inválida', false);
	}


	const valorimc = calculaImc(peso, altura);
	const nivelImc = getNivelImc(valorimc);

	const mensagem = `Seu IMC é ${valorimc} (${nivelImc}).`;
	setResultado(mensagem, true);

});

function setResultado (msg, isValid) {
	const resultado = document.querySelector('#resultado')
	resultado.innerHTML = '';

	const p = criaParagrafo();

	if(isValid){
		p.classList.add('paragrafo-resultado');
	} else {
		p.classList.add('bad');
	}

	p.innerHTML = msg;
	resultado.appendChild(p);

}

function criaParagrafo () {
	return document.createElement('p');
}

function calculaImc(peso, altura) {
	let imc = peso / (altura**2);
	return imc.toFixed(2);
}

function getNivelImc (imc) {
	const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
		'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

	if (imc >= 39.9) return nivel[5];
	if (imc >= 34.9) return nivel[4];
	if (imc >= 29.9) return nivel[3];
	if (imc >= 24.9) return nivel[2];
	if (imc >= 18.5) return nivel[1];
	if (imc < 18.5) return nivel[0];
}


function validaCampos(peso, altura) {
	if (peso.isValid()){
		resultado.innerHTML=aaaaaaaa;
	}
}
