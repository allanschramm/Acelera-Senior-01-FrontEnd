$(document).ready(function() {

    // listando os estados
    $('#estado').html('<option>Selecione o estado</option>');
    $.each(estados, function(indice, item){
        $('#estado').append($('<option>', {
            text: item.estado,
            value: item.id
        }));
    });

    // listando as cidades quando um estado for selecionado (evento change)
    $('#estado').change(function() {
        let idestado = $(this).val();

        let cidadesFiltradas = $.grep(cidades, function(e) {
            return e.idestado == idestado;
        });

        $('#cidade').html('<option>Selecione a cidade</option>');
        $.each(cidadesFiltradas, function(indice, item){
            $('#cidade').append($('<option>', {
                text: item.cidade,
                value: item.id
            }));
        });
    });

    $('#btnEnviar').click(function(){
        let nome = $('#nome').val();
        let email = $('#email').val();
        let cidade = $('#cidade :selected').text();
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
            mensagem = `Nome: ${nome}<br/>Email: ${email}<br/>Cidade: ${cidade}`;
            $('#resultado').addClass('alert alert-success');
        }

        $('#resultado').hide();
        $('#resultado').html(mensagem);
        $('#resultado').fadeIn(3000);
        //$('#resultado').fadeOut(3000);
    });
});