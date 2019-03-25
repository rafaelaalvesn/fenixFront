var criancas;
var tipoUsuario;

window.onload = function () {
    tipoUsuario = localStorage['tipoUsuario'];
    $.ajax({
        url: "http://localhost:55571/api/jovem/lista",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                criancas = data;
                listarHTML();
            } else {
                alert("Erro ao listar jovens.");
            }
        },
        type: 'GET'
    });
}

listarHTML = function () {
    for (var i = 0; i < criancas.length; i++) {
        var htmlString = '<tr>' +
            '<td>' + criancas[i].nome + '</td>' +
            '<td>' + (criancas[i].ligadoDesligado ? "LIGADO" : "DESLIGADO") + '</td>' +
            '<td>';
        if (tipoUsuario != "medico") {
            htmlString += '<button type="button" class="btn btn-default bg-transparent" id="btLapisEditar" onclick="btLapisEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Cadastro" style="float: right">' +
                '<span class="fa fa-pencil"></span>' +
                '</button>';
        }
        htmlString += '<button type="button" class="btn btn-default bg-transparent formulario" id="btnVisualizar" onclick="btnVisualizarClick('+i+')" data-toggle="tooltip" data-container="body" data-placement="top" title="Visualizar Cadastro" style="float: right">'+
                '<span class="fa fa-eye"></span>'+
            '</button>' +
            '</td>' +
            '</tr>';
        document.getElementById('tabela-jovem').innerHTML += htmlString;
    }
}

btnNovoCadastro.onclick = function () {
    localStorage.setItem('jovemSelecionado', null);
    window.location.assign("/pages/cadastroCrianca.aspx");
};

btLapisEditarClick = function (index) {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('jovemSelecionado', JSON.stringify(criancas[index]));
    window.location.assign("/pages/cadastroCrianca.aspx");
};

btnVisualizarClick = function (index) {
    localStorage.setItem('desabilitaTextBox', 'true');
    localStorage.setItem('jovemSelecionado', JSON.stringify(criancas[index]));
    window.location.assign("/pages/cadastroCrianca.aspx");   
};

btnPesquisar = function () {
    debugger
    $.ajax({
        url: "http://localhost:55571/api/jovem/pesquisar",
        crossDomain: true,
        data: {
            "dado": txtPesquisa.value
        },
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                document.getElementById('tabela-jovem').innerHTML = '';
                criancas = data;
                listarHTML();
            } else {
                alert("Ocorreu um ero na pesquisa.");
            }
        },
        type: 'POST'
    });
}