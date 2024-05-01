$(document).ready(function() {
    $('#form-contato').submit(function(event) {
        event.preventDefault();
        // Exibir mensagem de confirmação
        alert('Mensagem enviada com sucesso!');
    });
});
