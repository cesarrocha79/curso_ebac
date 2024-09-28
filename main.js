$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        const enderecoNovaTarefa = $('#nova_tarefa').val();

        if (enderecoNovaTarefa.trim() !== "") {
            const novoItem = $('<li style="display: none"></li>');
            $(`<span>${enderecoNovaTarefa}</span>`).appendTo(novoItem);

            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(500);

            $('#nova_tarefa').val('');

            // Adiciona o evento de clique ao item
            novoItem.click(function() {
                console.log("Item clicado!"); // Debug: Verifica se o evento é acionado
                $(this).toggleClass('completed');
            });
        }
    });

    // Adiciona o evento de clique aos itens já existentes na lista
    $('ul').on('click', 'li', function() {
        console.log("Item clicado!"); // Debug: Verifica se o evento é acionado
        $(this).toggleClass('completed');
    });
});
