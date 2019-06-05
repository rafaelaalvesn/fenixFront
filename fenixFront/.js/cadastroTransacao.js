var tipoTransacao = '';

btnSalvarTransacao.onclick = function () {
    $.ajax({
        url: "http://localhost:55571/api/CAIXA/",
        crossDomain: true,
        data: {
            //"ID_TRANSACAO": codigo.value,
            "DATA": dataTransacao.value,
            "DESCRICAO": descricao.value,
            "VALOR": valorTransacao.value,          
            "tipoTransacao": tipoTransacao
        },
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
               alert("Caixa atualizado!");
            } else {
               alert("Erro ao inserir");
            }
        },
        type: 'POST'
    });
}

radioEntrada.onclick = function () {

    tipoTransacao = 'entrada';
    
}

radioSaida.onclick = function () {
    tipoTransacao = 'saida';
}