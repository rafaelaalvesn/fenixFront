var usuarioSelecionado;
var desabilitado;

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
        RG.value = usuarioSelecionado.RG;
        CPF.value = usuarioSelecionado.CPF;
        dataNascimento.value = new Date(usuarioSelecionado.dataNascimento).yyyymmdd();
        CEP.value = usuarioSelecionado.cep;
        rua.value = usuarioSelecionado.rua;
        dataEntrada.value = new Date(usuarioSelecionado.dataEntrada).yyyymmdd();
        dataSaida.value = new Date(usuarioSelecionado.dataSaida).yyyymmdd();
        numero.value = usuarioSelecionado.numero;
        bairro.value = usuarioSelecionado.bairro;      
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
        var url = usuarioSelecionado ? "http://localhost:55571/api/jovem/atualizar" : "http://localhost:55571/api/jovem/inserir";
        $.ajax({
            url: url,
            crossDomain: true,
            data: {
                "CPF": CPF.value,
                "RG": RG.value,
                "bairro": bairro.value,
                "cep": CEP.value,
                "dataEntrada": dataEntrada.value,
                "dataNascimento": dataNascimento.value,
                "dataSaida": dataSaida.value,
                "id": codigo.value,
                "idade": codigo.value,
                "ligadoDesligado": ligadoDesligado.value == 'Ligado' ? true : false,
                "motivoSaida": motivoSaida.value,
                "nome": nome.value,
                "nomeResponsavel": nomeResponsavel.value,
                "numero": numero.value,
                "outroResponsavel": outroResponsavel.value,
                "responsavel": responsavel.value,
                "rua": rua.value,
                "sexo": sexo.value.substring(0, 1)
            },
            dataType: 'json',
            success: function (data) {
                if (data !== null) {
                    usuarioSelecionado ? alert("Usuário atualizado!") : alert("Usuário inserido!");
                } else {
                    usuarioSelecionado ? alert("Erro ao atualizar") : alert("Erro ao inserir");
                }
            },
            type: 'POST'
        });
    }
}

