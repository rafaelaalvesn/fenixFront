btnCloseForm.onclick = function () {
    window.location.assign("/pages/crianca.aspx");
};

var jovemSelecionado;
var desabilitado;

window.onload = function () {
    desabilitado = localStorage['desabilitaTextBox'];
    jovemSelecionado = JSON.parse(localStorage['jovemSelecionado']);

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
    if (jovemSelecionado != null) {
        codigo.value = jovemSelecionado.id;
        nome.value = jovemSelecionado.nome;
        RG.value = jovemSelecionado.RG;
        CPF.value = jovemSelecionado.CPF;
        dataNascimento.value = new Date(jovemSelecionado.dataNascimento).yyyymmdd();
        CEP.value = jovemSelecionado.cep;
        rua.value = jovemSelecionado.rua;
        dataEntrada.value = new Date(jovemSelecionado.dataEntrada).yyyymmdd();
        dataSaida.value = new Date(jovemSelecionado.dataSaida).yyyymmdd();
        numero.value = jovemSelecionado.numero;
        bairro.value = jovemSelecionado.bairro;
        outroResponsavel.value = jovemSelecionado.outroResponsavel;
        nomeResponsavel.value = jovemSelecionado.nomeResponsavel;
        motivoSaida.value = jovemSelecionado.motivoSaida;
        if (jovemSelecionado.ligadoDesligado) {
            document.getElementById('ligadoDesligado').innerHTML += '<option>Ligado</option><option>Desligado</option>';
        } else {
            document.getElementById('ligadoDesligado').innerHTML += '<option>Desligado</option><option>Ligado</option>';
        }
        if (jovemSelecionado.sexo == 'M') {
            document.getElementById('sexo').innerHTML += '<option>Masculino</option><option>Feminino</option>';
        } else {
            document.getElementById('sexo').innerHTML += '<option>Feminino</option><option>Masculino</option>';
        }
        if (jovemSelecionado.responsavel === 'Mãe') {
            document.getElementById('responsavel').innerHTML += '<option>Mãe</option><option>Pai</option><option>Outro</option>';
        } else if (jovemSelecionado === 'Pai') {
            document.getElementById('responsavel').innerHTML += '<option>Pai</option><option>Mãe</option><option>Outro</option>';
        } else {
            document.getElementById('responsavel').innerHTML += '<option>Outro</option><option>Mãe</option><option>Pai</option>';
        }
    } else {
        document.getElementById('responsavel').innerHTML += '<option>Outro</option><option>Mãe</option><option>Pai</option>';
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
        var url = jovemSelecionado ? "http://localhost:55571/api/jovem/atualizar" : "http://localhost:55571/api/jovem/inserir";
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
                    jovemSelecionado ? alert("Jovem atualizado!") : alert("Jovem inserido!");
                } else {
                    jovemSelecionado ? alert("Erro ao atualizar") : alert("Erro ao inserir");
                }
            },
            type: 'POST'
        });
    }
}