$(document).ready(function() {
    $('#btnEnviar').click(function(){
        let nome = $('#nome').val();
        let email = $('#email').val();
        let mensagem;

        // eliminamos as possíveis classes css.
        if($('#resultado').hasClass('alert alert-success')) {
            $('#resultado').removeClass('alert alert-success')
        }

        if($('#resultado').hasClass('alert alert-danger')) {
            $('#resultado').removeClass('alert alert-danger')
        }

        // verificamos se os dados estão preenchidos corretamente
        if(nome === '' || email === '') {
            mensagem = 'Dados incompletos.';
            $('#resultado').addClass('alert alert-danger');
        } else {
            mensagem = `Nome da pessoa: ${nome}<br/>Email da pessoa: ${email}`;
            $('#resultado').addClass('alert alert-success');
        }

        $('#resultado').hide();
        $('#resultado').html(mensagem);
        $('#resultado').fadeIn(3000);
        $('#resultado').fadeOut(3000);
    });
});