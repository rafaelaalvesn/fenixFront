var usuarioSelecionado;
var tipoUsuario = ''; //old nomeCategoria
var idTipoUsuarioCadastro = 0; //idCatEstoqueCadastro
//var idCatEstoqueCadastroCat = 0; //idCatEstoqueCadastroCat
var desabilitado;;
var idUsuario;


window.onload = function () {
    preencherDropdown();
    desabilitado = localStorage['desabilitaTextBox'];
    usuarioSelecionado = JSON.parse(localStorage['usuarioSelecionado']);

    //if (localStorage['nomeCategoria'] != null) {
    //    nomeCategoria = JSON.parse(localStorage['nomeCategoria']);
    //}
    if (desabilitado === 'true') {
        var x = document.getElementsByClassName('formulario')
        for (var i = 0; i < x.length; i++)
            x[i].setAttribute("disabled", true);
    }
    if (desabilitado === 'false') {
        var x = document.getElementsByClassName('formulario')
        for (var i = 0; i < x.length; i++)
            x[i].removeAttribute("disabled");
    }

    if (usuarioSelecionado != null) {
        
        //document.getElementById('dropdownMenuButtonCategorias').innerHTML = estoqueSelecionado.EstoqueCat.nomeCategoria;
        //descricao.value = estoqueSelecionado.descricao;
        //unidade.value = estoqueSelecionado.unidade;
        //codigo.value = estoqueSelecionado.id;
        //idCatEstoqueCadastro = estoqueSelecionado.EstoqueCat.id;
    }
}

preencherDropdown = function () {

    $.ajax({
        url: "http://localhost:55571/api/usuario/tipo",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                tipoUsuario = data;

                for (var i = 0; i < tipoUsuario.length; i++) {
                    var htmlDropdownString =
                        '<a class="dropdown-item" id="' + tipoUsuario[i].id + ' "onclick="dropDownFunction(' + i + ')">' + tipoUsuario[i].tipo + '</a>';
                    document.getElementById('dropdownTipoUsuario').innerHTML += htmlDropdownString;
                }

            } else {
                alert("Erro ao listar usuários.");
            }
        },
        type: 'GET'
    })

    $.ajax({
        url: "http://localhost:55571/api/usuario/",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                usuarios = data;

                for (var i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].usuario1 == null) {
                        var htmlDropdownString =
                            '<a class="dropdown-item" id="' + usuarios[i].id + ' "onclick="dropDownFunctionUsuarios(' + i + ')">' + usuarios[i].nome + '</a>';
                        document.getElementById('dropdownUsuarios').innerHTML += htmlDropdownString;
                    }
                }

            } else {
                alert("Erro ao listar usuários.");
            }
        },
        type: 'GET'
    })
}

dropDownFunction = function (pos) {
    document.getElementById('dropdownMenuButtonTipoUsuario').innerHTML = tipoUsuario[pos].tipo;
    idTipoUsuarioCadastro = tipoUsuario[pos].id;
}

dropDownFunctionUsuarios = function (pos) {

    
    document.getElementById('dropdownMenuButtonUsuarios').innerHTML = usuarios[pos].nome;   
    idUsuario = usuarios[pos].id;

}

btnCloseForm.onclick = function () {
    window.location.assign("/pages/ControleUsuarios.aspx");
};
