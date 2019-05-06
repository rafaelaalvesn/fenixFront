var userData;

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
//window.onload = function () {
//    alert('Teste');
//}


//$(document).ready(function () {
//    $('#CEP').mask('00000-000');
//    $('#CPF').mask('000.000.000-00');
//    $('#Telefone').mask('(00) 00000-0000');
//});

//1	Administrador - Tudo o que os outros vêem + Opção CONTROLE DE USUÁRIOS(na engrenagem)
//2	Médico - Jovem
//3	Estoque - Estoque
//4	Financeiro - Caixa
//5	Psicólogo - Jovem(por que teria que implementar o módulo de cursos - que não tem -)
//6	Professor - Nada
//7	Auxiliar Administrativo - Visitas, Jovens
//8	Recursos Humanos - Recursos Humanos

$(document).ready(function () {
    this.userData = sessionStorage['userData'];

    if (this.userData) {
        this.userData = JSON.parse(this.userData);

        var tipoUsuario = this.userData.tipoUsuario;

        if (tipoUsuario !== 1) {
            var controleUsuario = document.getElementById('dropDownControleDeUsuario');
            var liHome = document.getElementById('liHome');
            var liJovens = document.getElementById('liJovens');
            var liVisitas = document.getElementById('liVisitas');
            var liCaixa = document.getElementById('liCaixa');
            var liEstoque = document.getElementById('liEstoque');
            var liRecursosHumanos = document.getElementById('liRecursosHumanos');

            if (controleUsuario) {
                controleUsuario.remove();
            }

            switch (tipoUsuario) {
                case 2:
                    showButtons('liJovens', null);
                    break;

                case 3:
                    showButtons('liEstoque');
                    break;

                case 4:
                    showButtons('liCaixa');
                    break;

                case 5:
                    showButtons('liJovens');
                    break;

                case 6:
                    showButtons(null, true);
                    break;

                case 7:
                    showButtons(['liVisitas', 'liJovens']);
                    break;

                case 8:
                    showButtons('liRecursosHumanos');
                    break;
            }
        }

        welcomeMessage.innerHTML = `Olá ${this.userData.nome}! (<a href="/pages/Login.aspx" onclick="clearSessionStorage()">sair</a>)`;
    }
});

dropDownSair.onclick = () => {
    clearSessionStorage();
};

clearSessionStorage = function () {
    sessionStorage.setItem('userData', '');
};

// btnsIdNames pode ser um único valor ou um array de valores
showButtons = function (btnsIdNames = '', removeAll) {

    var removableBtns = document.getElementsByClassName('removableBtn');

    if (removeAll) {
        for (let i = 0; i < removableBtns.length; i++) {
            removableBtns[i].remove();
            i--;
        }
        return;
    }

    if (btnsIdNames) {
        if (typeof btnsIdNames === 'object' && btnsIdNames.length > 0) {
            for (let i = 0; i < removableBtns.length; i++) {
                for (let j = 0; j < btnsIdNames.length; j++) {
                    if (removableBtns[i].id === btnsIdNames[j]) {
                        break;
                    }

                    if (j === btnsIdNames.length - 1) {
                        removableBtns[i].remove();
                        i--;
                    }
                }
            }
        } else {
            for (let i = 0; i < removableBtns.length; i++) {
                if (btnsIdNames === removableBtns[i].id) {
                    continue;
                }
                removableBtns[i].remove();
                i--;
            }
        }
    }
};