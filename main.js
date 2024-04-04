$(document).ready(function() {

//ADICIONANDO NOVA TAREFA
    $('.nova-tarefa-form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('.itemNovo-txt').val();

        const addItem = $('<li style="display: none"></li>')
        $(`<p>${tarefa}</p>`).appendTo(addItem)
        $(`
        <div class="icons">
            <img class="check" src="./imagens/feito.png"/>
            <img class="trash" src="./imagens/excluir.png"/>
        </div>`
        ).appendTo(addItem);
        $(addItem).appendTo('ul');

        $(addItem).fadeIn(500);
        $('.itemNovo-txt').val('');
    })

//CHECK
    $(document).on('click', '.check', function () {  //o "on" aplica a função para outros itens que possam surgir posteriormente. Usando "$(.check).click(function)", o cód seria aplicado apenas à primeira tarefa.
        var itemCheck = $(this).closest('li').find('p'); //localiza o li mais próximo, e procura o p para aplicar a função
        itemCheck.toggleClass("checked"); //toggle avalia se é pra acrescentar ou retirar a classe
        })

//EXCLUIR
    $(document).on('click', '.trash', function () {
        var itemTrash = $(this).closest('li').fadeOut (300, function () {
            $(this).remove();
        })
    })
})