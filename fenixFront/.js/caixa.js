var caixa;
var tipoUsuario;

btnTipoTransacao = function () {
    if (document.getElementById("entrada").checked == true) {
        document.getElementById("dropdownMenuButtonEntradas").disabled = false;
        document.getElementById("dataTransacaoEntrada").disabled = false;
        document.getElementById("descricaoEntrada").disabled = false;
    }
    else if (document.getElementById("saida").checked == true) {
        document.getElementById("dropdownMenuButtonSaida").disabled = false;
        document.getElementById("dataTransacaoSaida").disabled = false;
        document.getElementById("descricaoSaida").disabled = false;
    }
};

window.onload = function () {

    tipoUsuario = localStorage['tipoUsuario'];
    $.ajax({
        url: "http://localhost:55571/api/CAIXA/",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                caixa = data;
                listarHTML();
            } else {
                alert("Erro ao listar caixa.");
            }
        },
        type: 'GET'
    });
}



listarHTML = function () {

    for (var i = 0; i < caixa.length; i++) {

        //dataValidade = estoque[i].dataValidade;
        //if (dataValidade == null) {
        //    dataValidade = '-'
        //}

        //else {
        //    dataValidade = formataData(dataValidade);
        //}


        var valor;
        if (caixa[i].tipoTransacao == 'entrada') {

            valor = '<td style="color:green";>' + caixa[i].VALOR + '</td>'
            
        }
        else if (caixa[i].tipoTransacao == 'saida') {
            valor = '<td style="color:red";>' + caixa[i].VALOR + '</td>'   
        }

            var htmlString = '<tr>' +
                      
                '<td>' + caixa[i].ID_TRANSACAO + '</td>' +
                '<td>' + formataData(caixa[i].DATA) + '</td>' +
                '<td>' + caixa[i].DESCRICAO + '</td>'
        + valor         
            + '</tr>';
        document.getElementById('tabela-caixa').innerHTML += htmlString;
    }
}


formataData = function (dataFormatSQL) {
    moment.locale('pt-br');
    var dataPadraoBR = (moment(dataFormatSQL).format('DD/MM/YYYY'));
    return dataPadraoBR
}