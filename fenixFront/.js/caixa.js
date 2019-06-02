var caixa;
var tipoUsuario;

btnTipoTransacao.onClick = function () {
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
