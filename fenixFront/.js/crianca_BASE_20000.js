//localStorage['desabilitaTextBox'] = false;
window.onload = function () {
    var desabilitaTextBox;
}
btnNovoCadastro.onclick = function () {
    window.location.assign("/pages/cadastroCrianca.aspx");
};

btLapisEditar.onclick = function () {
    localStorage.setItem('desabilitaTextBox', 'false');
    window.location.assign("/pages/cadastroCrianca.aspx");
   
};


btnVisualizar.onclick = function () {
    localStorage.setItem('desabilitaTextBox', 'true');
    window.location.assign("/pages/cadastroCrianca.aspx");   
};

//$('input').click(function(){
//    $.ajax({
//        url: 'http://www.json-generator.com/api/json/get/ceKbWczwlK?indent=2',
//        success: function (data) {
//            alert(data);
//            $('nome').append("<p>"+this.chave1+"</p>");
//        }
//    })
//}


//// desabilita os textboxes quando clicar em Visualizar
//btnPesquisar.onclick = function () {
//    var x = document.getElementsByClassName('formulario')
//    for (var i = 0; i < x.length; i++)
//        x[i].setAttribute("disabled", true);
//};



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