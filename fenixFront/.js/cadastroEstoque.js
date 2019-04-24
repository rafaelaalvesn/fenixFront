window.onload = function () {
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

btnCloseForm.onclick = function () {
    window.location.assign("/pages/Estoque.aspx");
};


teste = function () 
{

    alert('Teste');
}