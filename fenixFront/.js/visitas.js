var visitas;
var tipoUsuario;
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
        if (visitas[i].Visivel == 1) {
        var htmlString = '<tr>' +    
            '<td>' + (visitas[i].Jovem && visitas[i].Jovem.nome? visitas[i].Jovem.nome : "Sem nome")+ '</td>' +
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
            '<button type="button" class="btn btn-default bg-transparent formulario" id="btnRemover" onclick="btnRemoverClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Remover Visita" style="float: right">' +
                '<span class="fa fa-trash"></span>' +
            '</button>' +
            '</td>' +
            '</tr>';
        document.getElementById('tabela-visitas').innerHTML += htmlString;
        }
    }
}

btnVisualizarClick = function (index) {
    localStorage.setItem('desabilitaTextBox', 'true');
    localStorage.setItem('visitaSelecionada', JSON.stringify(visitas[index]));

    if (visitas[index].Jovem != null && visitas[index].Jovem.nome != null) {
        localStorage.setItem('nomeJovem', JSON.stringify(visitas[index].Jovem.nome));
    }
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

    if (visitas[index].Jovem != null && visitas[index].Jovem.nome != null) {
        localStorage.setItem('nomeJovem', JSON.stringify(visitas[index].Jovem.nome));
    }

    window.location.assign("/pages/cadastroVisita.aspx");
};

btnRemoverClick = function (index) {
    localStorage.setItem('visitaSelecionada', JSON.stringify(visitas[index]));
    decisao = confirm("Deseja realmente excluir?");
  
    if (decisao){      
         
            $.ajax({

                url: "http://localhost:55571/api/visita/atualizar",
                crossDomain: true,
                data: {

                    "idVisita": (visitas[index].idVisita),
                    "nomeVisitante": visitas[index].nomeVisitante,
                    "cpfVisitante": visitas[index].cpfVisitante,
                    "TELVisitante": visitas[index].TELVisitante,
                    "dataVisita": visitas[index].dataVisita,
                    "horaVisita": visitas[index].horaVisita,
                    "idJovemVisitado": visitas[index].idJovemVisitado,
                    "numOrdemJudicial": visitas[index].numOrdemJudicial,
                    "tipoVisita": visitas[index].tipoVisita,
                    "Visivel": 0,
                },
                dataType: 'json',
                success: function (data) {
                    if (data !== null) {
                        alert("Visita Excluída!");                    
                        window.location.reload();

                    } else {
                        alert("Erro ao excluir visita!") ;
                    }
                },
                type: 'POST'
            });
        }
     
     else {        
        alert ("Você clicou no botão CANCELAR,\n"+      
        "porque foi retornado o valor: "+decisao);      
 }
    
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