<%@ Page Language="C#" AutoEventWireup="true" CodeFile="crianca.aspx.cs" Inherits="pages_cadastroCriancas" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/crianca.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="content" runat="server">
    <div id="topo">
        <div>

            <div class="container col-12">
                <h5 class="card-header bg-transparent tituloPagina">Jovens</h5>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-12">
                        <input type="text" class="form-control formulario" placeholder="Pesquisar Jovem" id="txtPesquisa">
                    </div>
                    <div class="col-md-2 col-sm-12">
                        <button type="button" class="w3-btn w3-medium w3-hover-clouds w3-clear" id="btnPesquisar" onclick="btnPesquisar()"> <i class="fa fa-search"></i> Pesquisar</button>
                    </div>

                    <%-- checkBos de jovens desligados --%>
                    <div class="col-md-4 col-sm-12 form-check">
                        <input class="form-check-input" type="checkbox" value="" id="checkBoxJovensDesligados">
                        <label class="form-check-label" for="defaultCheck1">
                            Mostrar apenas desligados.
                        </label>
                    </div>

                    <div class="col-md-3 col-sm-12" align="right">
                        <button type="button" class="w3-btn w3-medium w3-hover-clouds w3-clear" id="btnNovoCadastro" onclick="btnNovoCadastro()">
                            <span class="btn-label"><i class="fa fa-plus"></i>&nbspNovo Cadastro</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-6">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title">Nova Transação</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Salvar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div align="center" id="grid w3-flat-clouds">
        <div class="card bg-light w3-flat-clouds">

            <table class="table table-hover table1" id="tabela-jovem">
            </table>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/crianca.js"></script>
</asp:Content>


