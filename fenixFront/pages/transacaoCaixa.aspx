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

                <%-- botão rádio de esoclhe entre entrada e saída --%>
                <div class="form-row">
                    <div class="col-md-3">
                        <input type="radio" name="radio" value="1" checked>Nova Entrada
                    </div>
                    <div class="col-md-3">
                        <input type="radio" name="radio" value="2">Nova Saída
                    </div>
                </div>

                <hr />


                <%-- ENTRADA --%>

                <div class="form-row">
                    <div class="form-group col-md-2" id="codigoEntrada">
                        <label>Nº Transação</label>
                        <input type="text" class="form-control" disabled>
                    </div>
                    <div class="form-group col-md-4">
                        <label>Data do Recebimento</label>
                        <input type="date" class="form-control formulario" id="dataTransacaoEntrada">
                    </div>
                </div>


                <div class="form-row">
                    <div class="col-md-4 col-sm-12">
                        <div class="dropdown">
                            <h6><span class="label label-default">Filtrar por Tipo</span></h6>
                            <button class="btn btn-preto dropdown-toggle" type="button" id="dropdownMenuButtonEntradas" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tipo de Entrada
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownEntradas">
                                <a class="dropdown-item" id="entradaAll" onclick="reloadPage()">Todas Entradas</a>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Descrição</label>
                        <input type="text" class="form-control formulario" id="descricaoEntrada">
                    </div>
                </div>


                <hr />

                <%-- SAÍDA --%>

                <div class="form-row">
                    <div class="form-group col-md-2" id="codigoSaida">
                        <label>Nº Transação</label>
                        <input type="text" class="form-control" disabled>
                    </div>
                    <div class="form-group col-md-4">
                        <label>Data da Saída</label>
                        <input type="date" class="form-control formulario" id="dataTransacaoSaida" disabled>
                    </div>
                </div>


                <div class="form-row">
                    <div class="col-md-4 col-sm-12">
                        <div class="dropdown">
                            <h6><span class="label label-default">Filtrar por Tipo</span></h6>
                            <button class="btn btn-preto dropdown-toggle" type="button" id="dropdownMenuButtonSaida" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled>
                                Destino
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownSaida">
                                <a class="dropdown-item" id="estoqueAll" onclick="reloadPage()">Destino</a>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label>Descrição</label>
                        <input type="text" class="form-control formulario" id="descricaoSaida" disabled>
                    </div>
                </div>

            </form>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/caixa.js"></script>
</asp:Content>
