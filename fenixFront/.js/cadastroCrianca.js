btnCloseForm.onclick = function () {
    window.location.assign("/pages/crianca.aspx");
};

window.onload = function () {

    const desabilitado = localStorage['desabilitaTextBox'];

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
}

//if (localStorage['desabilitaTextBox']) {

//    var x = document.getElementsByClassName('formulario')
//    for (var i = 0; i < x.length; i++)
//        x[i].setAttribute("disabled", true);
//};