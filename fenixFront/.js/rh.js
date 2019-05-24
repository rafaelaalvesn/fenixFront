var usuarios;
var idTipoUsuarioCadastro;

btnNovoCadastro.onclick = function () {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('usuarioSelecionado', null);
    window.location.assign("/pages/cadastroRecursosHumanos.aspx");
};

btnEditarClick = function (index) {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('usuarioSelecionado', JSON.stringify(usuarios[index]));
    window.location.assign("/pages/cadastroRecursosHumanos.aspx");
};

window.onload = function () {

    tipoUsuario = localStorage['tipoUsuario'];
    $.ajax({
        url: "http://localhost:55571/api/usuario/",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                usuarios = data;
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
                usuarioTipos = data;
                preencherDropdown();
            } else {
                alert("Erro ao listar categorias.");
            }
        },
        type: 'GET'
    });

    ;
}


preencherDropdown = function () {

    for (var i = 0; i < usuarioTipos.length; i++) {
        var htmlDropdownString =
            '<a class="dropdown-item" id="' + usuarioTipos[i].id + ' "onclick="dropDownFunction(' + i + ')">' + usuarioTipos[i].tipo + '</a>';
        document.getElementById('dropdownTipoUsuario').innerHTML += htmlDropdownString;
    }
}


dropDownFunction = function (pos) {
    document.getElementById('dropdownMenuButtonTipoUsuario').innerHTML = usuarioTipos[pos].tipo;
    idTipoUsuarioCadastro = usuarioTipos[pos].id;

    $.ajax({
        url: "http://localhost:55571/api/usuario/GroupItensTipoUsuario",
        crossDomain: true,
        data: {
            "dado": idTipoUsuarioCadastro
        },
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                document.getElementById('tabela-rh').innerHTML = '';
                usuarios = data;
                listarHTML();
            } else {
                alert("Ocorreu um erro na pesquisa.");
            }
        },
        type: 'POST'
    });
}


listarHTML = function () {

    for (var i = 0; i < usuarios.length; i++) {

        //dataValidade = estoque[i].dataValidade;
        //if (dataValidade == null) {
        //    dataValidade = '-'
        //}

        //else {
        //    dataValidade = formataData(dataValidade);
        //}

        var htmlString = '<tr>' +       
            '<td>' + usuarios[i].nome + '</td>' +          
            '<td>' + formataData(usuarios[i].data_nascimento) + '</td>' +
               '<td>' + (usuarios[i].TipoUsuario && usuarios[i].TipoUsuario.tipo ? usuarios[i].TipoUsuario.tipo : "N/A") + '</td>' +
              '<td>' + (usuarios[i].ligadoDesligado ? "LIGADO" : "DESLIGADO") + '</td>' +
            '<td>';

        htmlString +=  '<button type="button" class="btn btn-default bg-transparent" id="btnEditar" onclick="btnEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Estoque">' +
            '<span class="fa fa-pencil"></span>' +
            '</button>'  + 
        '</td>' +
        '</tr>';
        document.getElementById('tabela-rh').innerHTML += htmlString;
    }
}

reloadPage = function () {
    window.location.reload();
};


formataData = function (dataFormatSQL) {
    moment.locale('pt-br');
    var dataPadraoBR = (moment(dataFormatSQL).format('DD/MM/YYYY'));
    return dataPadraoBR
}