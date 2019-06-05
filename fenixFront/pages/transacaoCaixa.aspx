<%@ Page Language="C#" AutoEventWireup="true" CodeFile="transacaoCaixa.aspx.cs" Inherits="pages_transacaoCaixa" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/formulariosCadastro.css" rel="stylesheet" />
    <link href="../css/cadastroTransacao.css" rel="stylesheet" />
</asp:Content>
<asp:Content ContentPlaceHolderID="content" runat="server">
    <div class="card bg-light col-8 cardForm">
        <div id="titulo" class="card-header tituloFormularios">
            <label>Caixa</label>
            <button id="btnCloseForm" type="button" class="btn btn-labeled btn-transparent" onclick="btnCloseForm()">
                <span class="btn-label"><i class="fa fa-window-close"></i></span>
            </button>
        </div>
        <div class="card-body" id="form">
            <form>

                <%-- botão rádio de escolha entre entrada e saída --%>
                <div class="form-row">
                    <div class="col-md-3">
                        <input type="radio" name="radio" value="entrada" id="radioEntrada" onclick="radioEntrada()">Nova Entrada
                    </div>
                    <div class="col-md-3">
                        <input type="radio" name="radio" value="saida" id="radioSaida" onclick="radioSaida()">Nova Saída
                    </div>
                    <div class="col-md-3 lblNumTransacao">
                        Nº Transação:
                    </div>
                    <div class="form-group col-md-3" id="codigoTransacao">
                        <input type="text" class="form-control" disabled>
                    </div>
                </div>

                <hr />

                <%-- ENTRADA --%>

                <div class="form-row">

                    <div class="col-md-4">
                        <label>Data do Recebimento</label>
                        <input type="date" class="form-control formulario" id="dataTransacao">
                    </div>
                    <div class="col-md-5">
                        <label>Descrição</label>
                        <input type="text" class="form-control formulario" id="descricao">
                    </div>
                    <div class="col-md-3">
                        <label>Valor do Recebimento</label>
                        <input type="number" class="form-control formulario" id="valorTransacao">
                    </div>
                </div>

                <hr />

                <div class="row ">

                    <div class="buttonTransacao col-md-2 col-sm-12">

                          <button id="btnSalvarTransacao" type="button" class="btn btn-labeled btn-preto" onclick="btnSalvarTransacao()"> 
                            <span class="btn-label"><i class="fa fa-check"></i></span>&nbspSalvar Transação
                        </button> 
                    </div>
                </div>
                <hr />
            </form>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/cadastroTransacao.js"></script>
</asp:Content>
