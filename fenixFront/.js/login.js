btnLogin.onclick = function () {
    var emailAux = email.value;
    var senhaAux = senha.value;

    $.ajax({
        type: "POST",
        url: 'http://localhost:55571/api/login/',
        data: {
            "email": emailAux,
            "senha": senhaAux
        },
        success: function (data) {
            if (data !== null) {
                sessionStorage.setItem('userData', JSON.stringify(data));
                window.location.assign("/pages/crianca.aspx");
            } else {
                alert("Email ou senha inválidos.");
            }
        },
        dataType: 'json'
    });
};

