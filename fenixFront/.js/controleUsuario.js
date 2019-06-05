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

        htmlString += '<button type="button" class="btn btn-default bg-transparent" id="btnEditar" onclick="btnEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Usuário">' +
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
    document.getElementById('dropdownMenuButtonUsuarios').innerHTML = usuarioTipo[pos].tipo;
    idtipoUsuarioCadastro = usuarioTipo[pos].id;

    $.ajax({
        url: "http://localhost:55571/api/usuario/GroupItensTipoUsuario",
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


reloadPage = function () {
    window.location.reload();
};

btnEditarClick = function (index) {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('usuarioSelecionado', JSON.stringify(usuario[index]));
    window.location.assign("/pages/cadastroUsuario.aspx");
};

btnRemoverClick = function () {
    localStorage.setItem('usuarioSelecionado', JSON.stringify(usuario[index]));

        $.ajax({
            url: "http://localhost:55571/api/usuario/",
            crossDomain: true,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({


                "CPF": usuarioSelecionado.CPF,
                "RG": usuarioSelecionado.RG,
                "bairro": usuarioSelecionado.bairro,
                "cep": usuarioSelecionado.cep,
                "dataEntrada": usuarioSelecionado.dataEntrada,
                "data_nascimento": usuarioSelecionado.data_nascimento,
                "dataSaida": usuarioSelecionado.dataSaida,
                "idade": usuarioSelecionado.idade,
                "ligadoDesligado": usuarioSelecionado.ligadoDesligado,
                "nome": usuarioSelecionado.nome,
                "numero": usuarioSelecionado.numero,
                "logradouro": usuarioSelecionado.logradouro,
                "sexo": usuarioSelecionado.sexo,
                "id": usuarioSelecionado.idUsuario,

                "email": null,
                "usuario1": null,
                "senha": null

            }),
            dataType: 'json',
            success: function (data) {
                if (data !== null) {
                    alert("Usuário Excluído!");
                } else {
                    alert("Erro ao excluir");
                }
            },
            type: 'PUT'
        });
    
}