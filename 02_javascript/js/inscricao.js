// obtendo a referencia ao botão de comandos
let botao = document.getElementById('btnEnviar');

// definindo o evento click para o botão
botao.addEventListener('click', function() {

    // obtendo as informações dos campos de entrada
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = document.getElementById('data').value;

    // criando a mensagem como resposta
    let mensagem = `Nome: ${nome}<br/>Email: ${email}<br/>Data Nasc.: ${data}`;

    document.getElementById('resposta').innerHTML = mensagem;
});
