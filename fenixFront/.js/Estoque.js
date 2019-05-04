var estoque;
var tipoUsuario;
var estoqueSelecionado;
var nomeCategoria = '';
var idCatEstoqueCadastro;
var desabilitado;

window.onload = function () {

    tipoUsuario = localStorage['tipoUsuario'];
    $.ajax({
        url: "http://localhost:55571/api/estoque/",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                estoque = data;
                listarHTML();
            } else {
                alert("Erro ao listar estoque.");
            }
        },
        type: 'GET'
    });


    $.ajax({
        url: "http://localhost:55571/api/estoque/categoria",
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


preencherDropdown = function () {
  
    for (var i = 0; i < estoqueCategorias.length; i++) {
        var htmlDropdownString =
            '<a class="dropdown-item" id="' + estoqueCategorias[i].id + ' "onclick="dropDownFunction(' + i + ')">' + estoqueCategorias[i].nomeCategoria + '</a>';
        document.getElementById('dropdownCategorias').innerHTML += htmlDropdownString;
    }   
}


dropDownFunction = function (pos) {
    document.getElementById('dropdownMenuButtonCategorias').innerHTML = estoqueCategorias[pos].nomeCategoria;
    idCatEstoqueCadastro = estoqueCategorias[pos].id;

    $.ajax({
        url: "http://localhost:55571/api/estoque/GroupItensCategoria",
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
        

listarHTML = function () {

    for (var i = 0; i < estoque.length; i++) {
        
        dataValidade = estoque[i].dataValidade;
        if (dataValidade == null) {
            dataValidade = '-'
        }

        else {
            dataValidade = formataData(dataValidade);
        }

        var htmlString = '<tr>' +
            '<td>' + (estoque[i].EstoqueCat && estoque[i].EstoqueCat.nomeCategoria ? estoque[i].EstoqueCat.nomeCategoria : "N/A") + '</td>' +

            '<td>' + estoque[i].descricao + '</td>' +
            '<td>' + estoque[i].unidade + '</td>' +
            '<td>' + dataValidade + '</td>' +
            '<td>';
      
         htmlString += '<button type="button" class="btn btn-default bg-transparent formulario" id="btnRemover" onclick="btnRemoverClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Excluir Registro">' +
           '<span class="fa fa-trash"></span>' +
           '</button>';

            htmlString += '<button type="button" class="btn btn-default bg-transparent" id="btnEditar" onclick="btnEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Estoque">' +
                '<span class="fa fa-pencil"></span>' +
                '</button>' +      
       
            '</td>' +
            '</tr>';
        document.getElementById('tabela-estoque').innerHTML += htmlString;
    }
}



btnVisualizarClick = function (index) {
    localStorage.setItem('desabilitaTextBox', 'true');
    localStorage.setItem('estoqueSelecionado', JSON.stringify(estoque[index]));

    if (estoque[index].EstoqueCat != null && estoque[index].EstoqueCat.nomeCategoria != null) {
        localStorage.setItem('nomeCategoria', JSON.stringify(estoque[index].EstoqueCat.nomeCategoria));
    }
    window.location.assign("/pages/cadastroEstoque.aspx");
};

btnEditarClick = function (index) {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('estoqueSelecionado', JSON.stringify(estoque[index]));

    if (estoque[index].EstoqueCat != null && estoque[index].EstoqueCat.nome != null) {
        localStorage.setItem('nomeCategoria', JSON.stringify(estoque[index].EstoqueCat.nome));
    }

    window.location.assign("/pages/cadastroEstoque.aspx");
};


btnNovoCadastro.onclick = function () {
    localStorage.setItem('desabilitaTextBox', 'false');
    localStorage.setItem('estoqueSelecionado', null);
    window.location.assign("/pages/cadastroEstoque.aspx");
};


btnRemoverClick = function (index) {
    localStorage.setItem('estoqueSelecionado', JSON.stringify(estoque[index]));
    decisao = confirm("Deseja realmente todo registro selecionado?");

    if (decisao) {

        $.ajax({

            url: "http://localhost:55571/api/estoque/",
            crossDomain: true,
            data: {

                "id": estoque[index].id,
                "idCategoria": estoque[index].idCategoria,
                "descricao": estoque[index].descricao,
                "dataValidade": estoque[index].dataValidade,
                "unidade": estoque[index].unidade
            },
            dataType: 'json',
            success: function (data) {
                if (data !== null) {
                    alert("Item removido do estoque!");
                    window.location.reload();

                } else {
                    alert("Erro ao excluir item do estoque!");
                }
            },
            type: 'DELETE'
        });
    }
};



reloadPage = function () {
    window.location.reload();
};


formataData = function (dataFormatSQL) {
    moment.locale('pt-br');
    var dataPadraoBR = (moment(dataFormatSQL).format('DD/MM/YYYY'));
    return dataPadraoBR
}