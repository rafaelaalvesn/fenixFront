var visitaSelecionada;
var nomeJovem = '';
var formDesabilitado;
//var idVisita = 2;
var idJovemSelecionado;

btnCloseForm.onclick = function () {
    window.location.assign("/pages/Visitas.aspx");
};


preencherDropdown = function () {
    $.ajax({
        url: "http://localhost:55571/api/jovem/lista",
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            if (data !== null) {
                jovem = data;

                for (var i = 0; i < jovem.length; i++) {
                    if (jovem[i].ligadoDesligado == true && jovem[i].nome != null) {
                    var htmlDropdownString =
                        '<a class="dropdown-item" id="' + jovem[i].id + ' "onclick="dropDownFunction(' + i + ')">' + jovem[i].nome + '</a>';
                    document.getElementById('dropdownJovens').innerHTML += htmlDropdownString;
                }

                }
            } else {
                alert("Erro ao listar categorias.");
            }
        },
        type: 'GET'
    })
}

dropDownFunction = function (pos) {
    document.getElementById('dropdownMenuButtonJovens').innerHTML = jovem[pos].nome;
    idJovemSelecionado = jovem[pos].id;   
}

window.onload = function () {
    preencherDropdown();
    desabilitado = localStorage['desabilitaTextBox'];
    visitaSelecionada = JSON.parse(localStorage['visitaSelecionada']);
    if (localStorage['nomeJovem'] != null) {
        nomeJovem = JSON.parse(localStorage['nomeJovem']);
    }

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
        codigo.value = visitaSelecionada.idVisita;
        document.getElementById('dropdownMenuButtonJovens').innerHTML = nomeJovem;
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
                "idVisita": codigo.value,
                "nomeVisitante": nomeVisitante.value,
                "cpfVisitante": cpfVisitante.value,
                "TELVisitante": TELVisitante.value,              
                "dataVisita": dataVisita.value,
                "horaVisita": horaVisita.value,              
                "idJovemVisitado": idJovemSelecionado,
                "tipoVisita": tipoVisita.value,
                "numOrdemJudicial": numOrdemJudicial.value,
                "Visivel": 1,
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

$(document).ready(function () {

    $("input[id*='visitanteCPF']").inputmask({
        mask: ['999.999.999-99', '99.999.999/9999-99'],
        keepStatic: true
    });
    $("input[id*='TELVisitante']").inputmask({
        mask: ['(99)99999-9999'],
        keepStatic: true
    });
});