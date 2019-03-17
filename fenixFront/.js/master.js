
//habilita os textboxes quando clicar em NovoCadastro ou Editar
//novoCadastro.onclick = function () {
//    var x = document.getElementsByClassName('formulario')   
//    for (var i = 0; i < x.length; i++)
//        x[i].removeAttribute("disabled");
    
//};

//btnEditar.onclick = function () {
//    var x = document.getElementsByClassName('formulario')
//    for (var i = 0; i < x.length; i++)
//        x[i].removeAttribute("disabled");
//};

//desabilita os textboxes quando clicar em Pesquisar
//btnPesquisar.onclick = function () {
//    var x = document.getElementsByClassName('formulario')
//    for (var i = 0; i < x.length; i++)
//        x[i].setAttribute("disabled", true);
//};


//coloca o campo CPF a funcionar certinho
//adiciona mascara de cpf


$(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
});