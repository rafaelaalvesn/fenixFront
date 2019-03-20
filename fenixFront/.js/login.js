btnLogin.onclick = function () {
    var emailAux = email.value;
    var senhaAux = senha.value;
    $.ajax({
        url: "http://localhost:55571/api/login",
        crossDomain: true,
        data: {
            "email": emailAux,
            "senha": senhaAux
        },
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                localStorage.setItem('tipoUsuario', data.tipoUsuario);
                window.location.assign("/pages/crianca.aspx");
            } else {
                alert("Email ou senha inválidos.");
            }
        },
        type: 'POST'
    });
};

