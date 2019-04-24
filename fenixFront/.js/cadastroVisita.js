btnCloseForm.onclick = function () {
    window.location.assign("/pages/Visitas.aspx");
};

var visitaSelecionada;
var jovemSelecionado;
var formDesabilitado;

window.onload = function () {
    desabilitado = localStorage['desabilitaTextBox'];
    visitaSelecionada = JSON.parse(localStorage['visitaSelecionada']);
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
    if (visitaSelecionada != null) {
        nomeJovem.value = jovemSelecionado.nome;
        numOrdemJudicial.value = visitaSelecionada.numOrdemJudicial;
        dataVisita.value = new Date(visitaSelecionada.dataVisita).yyyymmdd();
        horaVisita.value = visitaSelecionada.horaVisita;
        tipoVisita.value = visitaSelecionada.tipoVisita; // Pode ser coletiva/individual
        nomeVisitante.value = visitaSelecionada.nomeVisitante;
        cpfVisitante.value = visitaSelecionada.cpfVisitante;
        TELVisitante.value = visitaSelecionada.TELVisitante;
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
        var url = visitaSelecionada ? "http://localhost:55571/api/visita/atualizar" : "http://localhost:55571/api/visita/inserir";
        $.ajax({
            url: url,
            crossDomain: true,
            data: {
                "numOrdemJudicial": numOrdemJudicial.value,
                "dataVisita": dataVisita.value,
                "horaVisita": horaVisita.value,
                "tipoVisita": tipoVisita.value,
                "nomeVisitante": nomeVisitante.value,
                "cpfVisitante": cpfVisitante.value,
                "TELVisitante": TELVisitante.value,
                "idVisita": visitaSelecionada.idVisita,
                "Jovem": nomeJovem.value
            },
            dataType: 'json',
            success: function (data) {
                if (data !== null) {
                    visitaSelecionada ? alert("Visita atualizada!") : alert("Visita inserida!");
                } else {
                    visitaSelecionada ? alert("Erro ao atualizar") : alert("Erro ao inserir");
                }
            },
            type: visitaSelecionada? 'PUT' : 'POST'
        });
    }
}