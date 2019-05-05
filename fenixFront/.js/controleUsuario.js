var usuario;
var tipoUsuario;
var usuarioSelecionado;
var nomeUsuario = '';
var idtipoUsuarioCadastro;
var desabilitado;

window.onload = function () {

    tipoUsuario = localStorage['tipoUsuario'];
    $.ajax({
        url: "http://localhost:55571/api/usuario/",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                usuario = data;
                listarHTML();
            } else {
                alert("Erro ao listar usuários.");
            }
        },
        type: 'GET'
    });


    $.ajax({
        url: "http://localhost:55571/api/usuario/tipo",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                usuarioTipo = data;
                preencherDropdown();
            } else {
                alert("Erro ao listar tipo de usuário.");
            }
        },
        type: 'GET'
    });

    ;
}





listarHTML = function () {


    for (var i = 0; i < usuario.length; i++) {
        if (usuario[i].usuario1 != null) {
        var htmlString = '<tr>' +
            '<td>' + usuario[i].nome + '</td>' +
            '<td>' + usuario[i].email + '</td>' +
            '<td>' + usuario[i].usuario1 + '</td>' +
            '<td>' + (usuario[i].TipoUsuario && usuario[i].TipoUsuario.tipo ? usuario[i].TipoUsuario.tipo : "N/A") + '</td>' +
            '<td>' + (usuario[i].ligadoDesligado ? "LIGADO" : "DESLIGADO") + '</td>' +
            '<td>';

        htmlString += '<button type="button" class="btn btn-default bg-transparent formulario" id="btnRemover" onclick="btnRemoverClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Excluir Registro">' +
            '<span class="fa fa-trash"></span>' +
            '</button>';

        htmlString += '<button type="button" class="btn btn-default bg-transparent" id="btnEditar" onclick="btnEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Estoque">' +
            '<span class="fa fa-pencil"></span>' +
            '</button>' +

            '</td>' +
            '</tr>';
            document.getElementById('tabela-usuario').innerHTML += htmlString;
        }
    }
}


btnNovoCadastro.onclick = function () {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('usuarioSelecionado', null);
    window.location.assign("/pages/cadastroUsuario.aspx");
};

preencherDropdown = function () {

    for (var i = 0; i < usuarioTipo.length; i++) {
        var htmlDropdownString =
            '<a class="dropdown-item" id="' + usuarioTipo[i].id + ' "onclick="dropDownFunction(' + i + ')">' + usuarioTipo[i].tipo + '</a>';
        document.getElementById('dropdownUsuarios').innerHTML += htmlDropdownString;
    }
}


dropDownFunction = function (pos) {
    document.getElementById('dropdownMenuButtonUsuarios').innerHTML = estoqueCategorias[pos].nomeCategoria;
    idCatEstoqueCadastro = estoqueCategorias[pos].id;

    $.ajax({
        url: "http://localhost:55571/api/estoque/GroupItensTipoUsuario",
        crossDomain: true,
        data: {
            "dado": idtipoUsuarioCadastro
        },
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                document.getElementById('tabela-usuario').innerHTML = '';
                usuario = data;
                listarHTML();
            } else {
                alert("Ocorreu um erro na pesquisa.");
            }
        },
        type: 'POST'
    });
}