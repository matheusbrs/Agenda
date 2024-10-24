const form = document.querySelector('form');
const agenda = [];
let contatos = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    criaLinha();
    adicionaLinha();

});

function criaLinha() {
    const nome = document.getElementById('nome');
    const contato = document.getElementById('contato');
    let mensagemErro = document.getElementById('mensageError');
    let contatoErro = document.getElementById('contatoError');
    console.log(contato.value.length);

    mensagemErro.style.display = 'none';
    contatoErro.style.display = 'none';

    if (agenda.includes(contato.value)) {
        mensagemErro.style.display = 'block';
    } else {
        if (contato.value.length != 11) {

            contatoErro.style.display = 'block';
        } else {
            let adiciona = '<tr>';
            adiciona += `<td>${nome.value}</td>`;
            adiciona += `<td>${contato.value}</td>`;
            adiciona += '</tr>';

            contatos += adiciona;
            agenda.push(contato.value);
        }
    }
}

function adicionaLinha() {
    const corpo = document.querySelector('tbody');
    corpo.innerHTML = contatos;
}