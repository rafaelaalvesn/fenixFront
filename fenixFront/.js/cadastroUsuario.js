var usuarioSelecionado;
var tipoUsuario = ''; //old nomeCategoria
var idTipoUsuarioCadastro = 0; //idCatEstoqueCadastro
//var idCatEstoqueCadastroCat = 0; //idCatEstoqueCadastroCat
var desabilitado;;
var idUsuario;


var cep
var CPF
var RG
var bairro 
var numero 
var dataEntrada 
var dataSaida 
var idade
var ligadoDesligado 
var nome 
var logradouro 
var sexo 
var data_nascimento


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
        email.value = usuarioSelecionado.email;
        login.value = usuarioSelecionado.login;
        
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

    cep = usuarios[pos].cep
     CPF = usuarios[pos].CPF
     RG =  usuarios[pos].RG   
     bairro = usuarios[pos].bairro      
     numero =  usuarios[pos].numero
     dataEntrada = usuarios[pos].dataEntrada    
     dataSaida = usuarios[pos].dataSaida   
     idade = usuarios[pos].idade //idade????? TODO
     ligadoDesligado =  usuarios[pos].ligadoDesligado
     nome =  usuarios[pos].nome
     logradouro = usuarios[pos].logradouro
     sexo = usuarios[pos].sexo
     data_nascimento = usuarios[pos].data_nascimento


}

btnCloseForm.onclick = function () {
    window.location.assign("/pages/ControleUsuarios.aspx");
};


btnSalvarUsuario.onclick = function () {
    if (desabilitado === 'false') {
        $.ajax({
            url: "http://localhost:55571/api/usuario/",
            crossDomain: true,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({

                "CPF": CPF,
                "RG": RG,
                "bairro": bairro,
                "cep": cep,
                "dataEntrada": dataEntrada,
                "data_nascimento": data_nascimento,
                "dataSaida": dataSaida,           
                "idade": idade,
                "ligadoDesligado": ligadoDesligado,
                "nome": nome,
                "numero": numero,
                "logradouro": logradouro,
                "sexo": sexo,
                "id": idUsuario,
                "email": email.value,
                "usuario1": login.value,
                "senha": senha.value              
            }),
            dataType: 'json',
            success: function (data) {
                if (data !== null && (senha.value === confSenha.value)) {
                   alert("Usuário atualizado!");
                } else {
                   alert("Erro ao inserir, verifique se as senhas conferem");
                }
            },
            type: 'PUT'
        });
    } 
    
}


