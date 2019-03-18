btnNovoCadastro.onclick = function () {
    window.location.assign("/pages/cadastroCrianca.aspx");
};

btLapisEditar.onclick = function () {
    window.location.assign("/pages/cadastroCrianca.aspx");
};



btOlhoVisualizar.onclick = function () {
    window.location.assign("/pages/cadastroCrianca.aspx");
    var x = document.getElementsByClassName('formulario')
    for (var i = 0; i < x.length; i++)
        x[i].setAttribute("disabled", true);
};

    