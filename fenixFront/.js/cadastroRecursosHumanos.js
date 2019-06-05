var usuarioSelecionado;
var desabilitado;

btnCloseForm.onclick = function () {
    window.location.assign("/pages/RecursosHumanos.aspx");
};

window.onload = function () {
    desabilitado = localStorage['desabilitaTextBox'];
    usuarioSelecionado = JSON.parse(localStorage['usuarioSelecionado']);

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
    if (usuarioSelecionado != null) {

        codigo.value = usuarioSelecionado.id;
        nome.value = usuarioSelecionado.nome;
        CPF.value = usuarioSelecionado.CPF;
        dataNascimento.value = new Date(usuarioSelecionado.data_nascimento).yyyymmdd();
        CEP.value = usuarioSelecionado.cep;
        rua.value = usuarioSelecionado.logradouro;
        dataEntrada.value = new Date(usuarioSelecionado.dataEntrada).yyyymmdd();
        dataSaida.value = new Date(usuarioSelecionado.dataSaida).yyyymmdd();
        bairro.value = usuarioSelecionado.bairro;
        uf.value = usuarioSelecionado.uf;


        if (usuarioSelecionado.ligadoDesligado) {
            document.getElementById('ligadoDesligado').innerHTML += '<option>Ligado</option><option>Desligado</option>';
        } else {
            document.getElementById('ligadoDesligado').innerHTML += '<option>Desligado</option><option>Ligado</option>';
        }
        if (usuarioSelecionado.sexo == 'M') {
            document.getElementById('sexo').innerHTML += '<option>Masculino</option><option>Feminino</option>';
        } else {
            document.getElementById('sexo').innerHTML += '<option>Feminino</option><option>Masculino</option>';
        }      
    } else {
        document.getElementById('sexo').innerHTML += '<option>Feminino</option><option>Masculino</option>';
        document.getElementById('ligadoDesligado').innerHTML += '<option>Desligado</option><option>Ligado</option>';
    }
}

Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
};

btnSalvar = function () {
    if (desabilitado === 'false') {
        $.ajax({
            url: "http://localhost:55571/api/usuario/",
            crossDomain: true,
            contentType: "application/json; charset=utf-8",
            data:  JSON.stringify({
                "id": codigo.value,
                "cpf": CPF.value,
                "bairro": bairro.value,
                "cep": CEP.value,
                "uf": uf.value,
                "localidade": cidade.value,
                "dataEntrada": dataEntrada.value,
                "data_nascimento": dataNascimento.value,
                "dataSaida": dataSaida.value,
                "idade": codigo.value,
                "ligadoDesligado": ligadoDesligado.value == 'Ligado' ? true : false,           
                "nome": nome.value,
                "numero": numero.value,
                "logradouro": rua.value,
                "sexo": sexo.value.substring(0, 1)
            }),
            dataType: 'json',
            success: function (data) {
                if (data !== null) {
                    usuarioSelecionado ? alert("Usuário atualizado!") : alert("Usuário inserido!");
                } else {
                    usuarioSelecionado ? alert("Erro ao atualizar") : alert("Erro ao inserir");
                }
            },
            type: usuarioSelecionado ? 'PUT' : 'POST'
        });
    }
}

$(document).ready(function () {
    $("input[id*='CPF']").inputmask({
        mask: ['999.999.999-99', '99.999.999/9999-99'],
        keepStatic: true
    });
});
