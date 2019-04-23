var visitas;
var tipoUsuario;
var nomeJovem
var criancas;

window.onload = function () {
    tipoUsuario = localStorage['tipoUsuario'];
    $.ajax({
        url: "http://localhost:55571/api/visita/lista",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                visitas = data;
                listarHTML();
            } else {
                alert("Erro ao listar visitas.");
            }
        },
        type: 'GET'
    });
}


listarHTML = function () {

    for (var i = 0; i < visitas.length; i++) {
        var htmlString = '<tr>' +    
               '<td>' + getNomeJovem(visitas[i].idJovemVisitado) + '</td>' +
            '<td>' + visitas[i].nomeVisitante + '</td>' +
             '<td>' + formataData(visitas[i].dataVisita) + '</td>' +
            '<td>' + formataHora(visitas[i].horaVisita) + '</td>' +
            '<td>';
        if (tipoUsuario != "medico") {
            htmlString += '<button type="button" class="btn btn-default bg-transparent" id="btLapisEditar" onclick="btLapisEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Visita" style="float: right">' +
                '<span class="fa fa-pencil"></span>' +
                '</button>';
        }
        htmlString += '<button type="button" class="btn btn-default bg-transparent formulario" id="btnVisualizar" onclick="btnVisualizarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Visualizar Visita" style="float: right">' +
                '<span class="fa fa-eye"></span>' +
            '</button>' +
            '</td>' +
            '</tr>';
        document.getElementById('tabela-visitas').innerHTML += htmlString;
    }
}

btnNovoCadastro.onclick = function () {
    //localStorage.setItem('jovemSelecionado', null);
    window.location.assign("/pages/cadastroVisita.aspx");
};


formataData = function (dataFormatSQL) {
    moment.locale('pt-br');
    var dataPadraoBR = (moment(dataFormatSQL).format('DD/MM/YYYY'));
    return dataPadraoBR
}


formataHora = function (horaFormatSQL) {
    var horaPadraoBR = horaFormatSQL.substring(0, 5)
    return horaPadraoBR
}



getNomeJovem = function (idJovem) {
    debugger
    $.ajax({
        url: "http://localhost:55571/api/jovem/pesquisar",
        crossDomain: true,
        data: {
            "dado": idJovem
        },
        dataType: 'json',
        success: function (data) {
            if (data !== null) {             
               criancas = data;
               nomeJovem = criancas[0].nome;                
            } else {
                alert("Ocorreu um erro na pesquisa.");
            }
        },
        type: 'POST'
    });

}