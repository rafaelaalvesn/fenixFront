btnNovoCadastro.onclick = function () {
    window.location.assign("/pages/cadastroCrianca.aspx");
};

btLapisEditar.onclick = function () {
    window.location.assign("/pages/cadastroCrianca.aspx");
};



//btOlhoVisualizar.onclick = function () {
//    window.location.assign("/pages/cadastroCrianca.aspx");
//    var x = document.getElementsByClassName('formulario')
//    for (var i = 0; i < x.length; i++)
//        x[i].setAttribute("disabled", true);
//};


/*
var cpfDigitado = document.getElementById("txtPesquisa");

$("btnPesquisar").click(function () {
    $.post("http://www.json-generator.com/api/json/get/ceKbWczwlK?indent=2",
        {
            cpf: cpfDigitado
        },
        function (data, status) {
            var jovemPesquisado = data;
        });
});


$("button").click(function () {
    $.delete("http://localhost:5154/eliminarJovem",
        {
            cpf: "123123123"
        },
        function (data, status) {
            if (data === true) {
                //eliminado
            } else {
                //api retornou false, não deve ter encontrado o cpf 
            }
        });
});

*/