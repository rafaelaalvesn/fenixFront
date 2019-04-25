var estoqueSelecionado;
var nomeCategoria = '';

window.onload = function () {
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
    }


    $.ajax({
        url: "http://localhost:55571/api/estoque/listaCategorias",
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
}

preencherDropdown = function () {
    for (var i = 0; i < estoqueCategorias.length; i++) {
        categoria = estoqueCategorias[i];
        var htmlDropdownString =
             '<a class="dropdown-item" onclick="teste()">' + estoqueCategorias[i] + '</a>';
        document.getElementById('dropdownCategorias').innerHTML += htmlDropdownString;

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


teste = function () 
{

    alert('Teste');
}



btnSalvar = function () {
    if (desabilitado === 'false') {
        var url = estoqueSelecionado ? "http://localhost:55571/api/estoque/atualizar" : "http://localhost:55571/api/estoque/inserir";
        $.ajax({
            url: url,
            crossDomain: true,
            data: {
               
                "id": null,
                "idCategoria": null,
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
}