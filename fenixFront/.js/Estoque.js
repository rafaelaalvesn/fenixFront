var estoque;
var tipoUsuario;
var nomeCategoria;

window.onload = function () {
    tipoUsuario = localStorage['tipoUsuario'];
    $.ajax({
        url: "http://localhost:55571/api/estoque/lista",
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

   ;
}


preencherDropdown = function () {
  
    for (var i = 0; i < estoqueCategorias.length; i++) {
        nomeCategoria = estoqueCategorias[i];
    var htmlDropdownString = 
         '<a class="dropdown-item" id="' + i + '">' + nomeCategoria + '</a>';
    document.getElementById('dropdownCategorias').innerHTML += htmlDropdownString;
    }

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
            //'<td>' + estoque[i].idCategoria + '</td>' +
            '<td>' + estoque[i].descricao + '</td>' +
            '<td>' + estoque[i].unidade + '</td>' +
            '<td>' + dataValidade + '</td>' +
            '<td>';
        if (tipoUsuario != "medico") {
            htmlString += '<button type="button" class="btn btn-default bg-transparent" id="btnEditar" onclick="btnEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Estoque" style="float: right">' +
                '<span class="fa fa-pencil"></span>' +
                '</button>';
        }
        //htmlString += '<button type="button" class="btn btn-default bg-transparent formulario" id="btnVisualizar" onclick="btnVisualizarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Visualizar Estoque" style="float: right">' +
        //    '<span class="fa fa-eye"></span>' +
        //    '</button>' +
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

formataData = function (dataFormatSQL) {
    moment.locale('pt-br');
    var dataPadraoBR = (moment(dataFormatSQL).format('DD/MM/YYYY'));
    return dataPadraoBR
}


//btnNovoCadastro.onclick = function () {
//    //localStorage.setItem('jovemSelecionado', null);
//    window.location.assign("/pages/cadastroVisita.aspx");
//};


//$('#nomeCat').click(function ()
//{
//    a = document.getElementById('nomeCat').value;

//});
