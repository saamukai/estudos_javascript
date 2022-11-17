function ex02 () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        
        pessoaIn = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(pessoaIn)
        console.log(pessoas)
        resultado.innerHTML+= `<p><b>${pessoaIn.nome} ${pessoaIn.sobrenome} ${pessoaIn.peso} ${pessoaIn.altura}</b></p>`
    }
    
    form.addEventListener('submit', recebeForm);
    
}
ex02();