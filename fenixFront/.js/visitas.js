var visitas;
var tipoUsuario;

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
            '<td>' + visitas[i].nome + '</td>' +
            '<td>' + visitas[i].nomeVisitante + '</td>' +
             '<td>' + visitas[i].dataVisita + '</td>' +
            '<td>' + visitas[i].dataVisita + '</td>' +           
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
