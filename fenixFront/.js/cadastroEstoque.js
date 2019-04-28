var estoqueSelecionado;
var nomeCategoria = '';
var idCatEstoqueCadastro;
var desabilitado;

window.onload = function () {
    preencherDropdown();
    desabilitado = localStorage['desabilitaTextBox'];
    estoqueSelecionado = JSON.parse(localStorage['estoqueSelecionado']);
  
    //$.ajax({
    //    url: "http://localhost:55571/api/estoque/listaCategorias",
    //    crossDomain: true,
    //    dataType: 'json',
    //    success: function (data) {
    //        if (data !== null) {
    //            estoqueCategorias = data;
    //            preencherDropdown();
    //        } else {
    //            alert("Erro ao listar categorias.");
    //        }
    //    },
    //    type: 'GET'
    //});

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
        //nomeJovem.value = nomeJovem;
        // idCategoria.value = estoqueSelecionado.idCategoria;

        if (estoqueSelecionado.dataValidade == null)
        {
            var x = document.getElementById('dataValidade')
                x.setAttribute("disabled", true);          
        }
        else
        {
            dataValidade.value = new Date(estoqueSelecionado.dataValidade).yyyymmdd();

        }             
        descricao.value = estoqueSelecionado.descricao;
        unidade.value = estoqueSelecionado.unidade;
        //dataValidade.value = estoqueSelecionado.dataValidade; 
        codigo.value = estoqueSelecionado.id;
    }

  
   
}

preencherDropdown = function () {


    $.ajax({
        url: "http://localhost:55571/api/estoque/listaCategorias",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                estoqueCategorias = data;

                for (var i = 0; i < estoqueCategorias.length; i++) {
        /*nomeCategoria = estoqueCategorias[i]*/;
                    var htmlDropdownString =
                        '<a class="dropdown-item" id="' + estoqueCategorias[i].id + ' "onclick="dropDownFunction(' + estoqueCategorias[i].id +')">' + estoqueCategorias[i].nomeCategoria + '</a>';
                    document.getElementById('dropdownCategorias').innerHTML += htmlDropdownString;
                }

            } else {
                alert("Erro ao listar categorias.");
            }
        },
        type: 'GET'
    })
}

dropDownFunction = function (idCategoria) {
    document.getElementById('dropdownMenuButtonCategorias').innerHTML = estoqueCategorias[idCategoria - 1].nomeCategoria;
    idCatEstoqueCadastro = idCategoria;

    var x = document.getElementById('dataValidade');   
    if (estoqueCategorias[idCategoria - 1].possuiValidade == true) {

        x.removeAttribute("disabled");
    }
    if (estoqueCategorias[idCategoria - 1].possuiValidade == false)
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
        var url = estoqueSelecionado ? "http://localhost:55571/api/estoque/atualizar" : "http://localhost:55571/api/estoque/inserir";
        $.ajax({
            url: url,
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
            type: 'POST'
        });
    }
};