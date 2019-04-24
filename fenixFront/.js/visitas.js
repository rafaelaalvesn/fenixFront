﻿var visitas;
var tipoUsuario;
var nomeJovem
var criancas;
nomeJovemm = localStorage['nomeJovemm'];

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

    //$.ajax({
    //    url: "http://localhost:55571/api/jovem/pesquisar",
    //    crossDomain: true,
    //    data: {
    //        "dado": 46 /*ajeitar p/ pegar o id do jovem do grid*/
    //    },
    //    dataType: 'json',
    //    success: function (data) {
    //        if (data !== null) {
    //            criancas = data;

    //        } else {
    //            alert("Ocorreu um erro na pesquisa.");
    //        }
    //    },
    //    type: 'POST'
    //});
    //a();
}


listarHTML = function () {
    
    for (var i = 0; i < visitas.length; i++) {   
        var htmlString = '<tr>' +    
            '<td>' + visitas[i].idJovemVisitado + '</td>' +
            //'<td>' + criancas[0].nome + '</td>' +
            '<td>' + visitas[i].nomeVisitante + '</td>' +
             '<td>' + formataData(visitas[i].dataVisita) + '</td>' +
            '<td>' + formataHora(visitas[i].horaVisita) + '</td>' +
            '<td>';
        if (tipoUsuario != "medico") {
            htmlString += '<button type="button" class="btn btn-default bg-transparent" id="btLapisEditar" onclick="btnLapisEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Visita" style="float: right">' +
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

btnVisualizarClick = function (index) {
    localStorage.setItem('desabilitaTextBox', 'true');
    localStorage.setItem('visitaSelecionada', JSON.stringify(visitas[index]));
    delete criancas[0].Visita;
    localStorage.setItem('jovemSelecionado', JSON.stringify(criancas[0]));
    window.location.assign("/pages/cadastroVisita.aspx");
};

//btnNovoCadastro.onclick = function () {
//    //localStorage.setItem('jovemSelecionado', null);
//    window.location.assign("/pages/cadastroVisita.aspx");
//};

btnNovoCadastro.onclick = function () {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('visitaSelecionada', null);
    window.location.assign("/pages/cadastroVisita.aspx");
};

btnLapisEditarClick = function (index) {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('visitaSelecionada', JSON.stringify(visitas[index]));
    delete criancas[0].Visita;
    localStorage.setItem('jovemSelecionado', JSON.stringify(criancas[0]));
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


a = function () {
    tipoUsuario = localStorage['tipoUsuario'];
    $.ajax({
        url: "http://localhost:55571/api/jovem/lista",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                criancas = data;
            } else {
                alert("Erro ao listar visitas.");
            }
        },
        type: 'GET'
    });
}


btnPesquisarVisita = function () {
    debugger

    if (txtPesquisaVisita.value == "")
    {
        window.location.assign("/pages/Visitas.aspx");
    }
    
    else {

    $.ajax({
        url: "http://localhost:55571/api/visita/pesquisar",
        crossDomain: true,
        data: {
            "dado": txtPesquisaVisita.value
        },
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                document.getElementById('tabela-visitas').innerHTML = '';
                visitas = data;
                listarHTML();
            } else {
                alert("Ocorreu um erro na pesquisa.");
            }
        },
        type: 'POST'
    });

    }
}