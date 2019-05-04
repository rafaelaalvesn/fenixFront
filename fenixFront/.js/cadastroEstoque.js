var estoqueSelecionado;
var nomeCategoria = '';
var idCatEstoqueCadastro = 0;
var idCatEstoqueCadastroCat = 0;
var desabilitado;
var possuiValidadeChecked = false;


window.onload = function () {
    preencherDropdown();
    desabilitado = localStorage['desabilitaTextBox'];
    estoqueSelecionado = JSON.parse(localStorage['estoqueSelecionado']);
  
    if (localStorage['nomeCategoria'] != null) {
        nomeCategoria = JSON.parse(localStorage['nomeCategoria']);
    }
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

    if (estoqueSelecionado != null) {

        if (estoqueSelecionado.dataValidade == null)
        {
            var x = document.getElementById('dataValidade')
                x.setAttribute("disabled", true);          
        }
        else
        {
            dataValidade.value = new Date(estoqueSelecionado.dataValidade).yyyymmdd();

        }
        document.getElementById('dropdownMenuButtonCategorias').innerHTML = estoqueSelecionado.EstoqueCat.nomeCategoria;
        descricao.value = estoqueSelecionado.descricao;
        unidade.value = estoqueSelecionado.unidade;
        codigo.value = estoqueSelecionado.id;
        idCatEstoqueCadastro = estoqueSelecionado.EstoqueCat.id;
    } 
}

preencherDropdown = function () {

    $.ajax({
        url: "http://localhost:55571/api/estoque/categoria",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                estoqueCategorias = data;

                for (var i = 0; i < estoqueCategorias.length; i++) {
                    var htmlDropdownString =
                        '<a class="dropdown-item" id="' + estoqueCategorias[i].id + ' "onclick="dropDownFunction(' + i +')">' + estoqueCategorias[i].nomeCategoria + '</a>';
                    document.getElementById('dropdownCategorias').innerHTML += htmlDropdownString;
                }

                htmlDropdownString = '<hr><a class="dropdown-item" id="btnNovaCategoria"  data-toggle="modal" data-target="#modalNovaCategoria">' +'+ Nova Categoria' +'</a>';
                document.getElementById('dropdownCategorias').innerHTML += htmlDropdownString;
            } else {
                alert("Erro ao listar categorias.");
            }
        },
        type: 'GET'
    })
}

dropDownFunction = function (pos) {
    document.getElementById('dropdownMenuButtonCategorias').innerHTML = estoqueCategorias[pos].nomeCategoria;
    idCatEstoqueCadastro = estoqueCategorias[pos].id;

    var x = document.getElementById('dataValidade');   
    if (estoqueCategorias[pos].possuiValidade == true) {

        x.removeAttribute("disabled");
    }
    if (estoqueCategorias[pos].possuiValidade == false)
    {
        x.setAttribute("disabled", false);     
    }
}


Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
};


btnCloseForm.onclick = function () {
    window.location.assign("/pages/Estoque.aspx");
};



btnSalvarEstoque.onclick = function () {
    if (desabilitado === 'false') {
        $.ajax({
            url: "http://localhost:55571/api/estoque/",
            crossDomain: true,
            data: {
                "id": codigo.value,
                "idCategoria": idCatEstoqueCadastro,
                "descricao": descricao.value,
                "dataValidade": dataValidade.value,
                "unidade": unidade.value
            },
            dataType: 'json',
            success: function (data) {
                if (data !== null) {
                    estoqueSelecionado ? alert("Estoque atualizado!") : alert("Estoque inserido!");
                } else {
                    estoqueSelecionado ? alert("Erro ao atualizar") : alert("Erro ao inserir");
                }
            },
            type: estoqueSelecionado ? 'PUT' : 'POST'
        });
    }
};

//possuiValidade.onclick = function () 
function possuiValidade()
{

    var checkBox = document.getElementById('possuiValidade');

    if (checkBox.checked == true) {
        possuiValidadeChecked = true;
    } else {
        possuiValidadeChecked = false;
    }

   
}

btnSalvarNovaCategoria.onclick = function () {

    var texto = inputNomeCategoria.value;
    var textoFormatado = titleize(texto);

    $.ajax({
        url: "http://localhost:55571/api/estoque/categoria",
        crossDomain: true,
        data: {
            "id": idCatEstoqueCadastroCat,
            "nomeCategoria": textoFormatado,   
            "possuiValidade": possuiValidadeChecked   
        },
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
               alert("Categoria Inserida!");
            } 
        },
        type: 'POST'
    });
}



function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}