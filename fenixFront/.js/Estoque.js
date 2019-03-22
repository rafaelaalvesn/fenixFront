var estoque;
var tipoUsuario;

listarHTML = function () {
    for (var i = 0; i < estoque.length; i++) {
        var htmlString = '<tr>' +
            '<td>' + criancas[i].nome + '</td>' +
            '<td>' + (criancas[i].ligadoDesligado ? "LIGADO" : "DESLIGADO") + '</td>' +
            '<td>';
        if (tipoUsuario === "admin") {
            htmlString += '<button type="button" class="btn btn-default bg-transparent" id="btLapisEditar" onclick="btLapisEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Cadastro" style="float: right">' +
                '<span class="fa fa-pencil"></span>' +
                '</button>';
        }
        htmlString += '<button type="button" class="btn btn-default bg-transparent formulario" id="btnVisualizar" onclick="btnVisualizarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Visualizar Cadastro" style="float: right">' +
                '<span class="fa fa-eye"></span>' +
            '</button>' +
            '</td>' +
            '</tr>';
        document.getElementById('tabela-jovem').innerHTML += htmlString;
    }
}