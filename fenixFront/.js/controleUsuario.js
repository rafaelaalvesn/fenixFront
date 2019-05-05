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
                estoque = data;
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
                estoqueCategorias = data;
                preencherDropdown();
            } else {
                alert("Erro ao listar categorias.");
            }
        },
        type: 'GET'
    });

    ;
}

btnNovoCadastro.onclick = function () {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('usuarioSelecionado', null);
    window.location.assign("/pages/cadastroUsuario.aspx");
};

preencherDropdown = function () {

    for (var i = 0; i < estoqueCategorias.length; i++) {
        var htmlDropdownString =
            '<a class="dropdown-item" id="' + estoqueCategorias[i].id + ' "onclick="dropDownFunction(' + i + ')">' + estoqueCategorias[i].nomeCategoria + '</a>';
        document.getElementById('dropdownCategorias').innerHTML += htmlDropdownString;
    }
}


dropDownFunction = function (pos) {
    document.getElementById('dropdownMenuButtonUsuarios').innerHTML = estoqueCategorias[pos].nomeCategoria;
    idCatEstoqueCadastro = estoqueCategorias[pos].id;

    $.ajax({
        url: "http://localhost:55571/api/estoque/GroupItensTipoUsuario",
        crossDomain: true,
        data: {
            "dado": idCatEstoqueCadastro
        },
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                document.getElementById('tabela-estoque').innerHTML = '';
                estoque = data;
                listarHTML();
            } else {
                alert("Ocorreu um erro na pesquisa.");
            }
        },
        type: 'POST'
    });
}