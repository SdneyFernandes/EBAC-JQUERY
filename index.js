$(document).ready(function() {
    $('#tarefaForm').submit(function(event) {
        event.preventDefault();

        var taskName = $('#tarefaName').val();

        $('#tarefaList').append('<li>' + taskName + '</li>');

        $('#tarefaName').val('');
    });

    $('#tarefaList').on('click', 'li', function() {
        $(this).toggleClass('clicar');
    });
});