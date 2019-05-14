﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="caixa.aspx.cs" Inherits="pages_caixa" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/caixa.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="content" runat="server">
    <div id="topo">

        
        <div class="container col-12">
            <h5 class="row card-header bg-transparent tituloPagina">Caixa</h5>
            <div class="row">
                <div class="divTitulo col-9" style="text-align: left">
                    <h6 class="card-header bg-transparent tituloPagina">Últimas Transações</h6>
                </div>

                <%-- botão para nova transação --%>
                <div class="divBtnTransacao col-md-3 col-sm-12" align="right">
                    <button type="button" class="w3-btn w3-medium w3-hover-clouds w3-clear" id="btnNovaTransacao" onclick="btnNovaTransacao()">
                        <span class="btn-label"><i class="fa fa-plus"></i></span>&nbspNova Transacao
                    </button>
                </div>
                <%-- fim do botão para nova transação --%>
            </div>

            <div align="center" id="grid">
                <div class="card bg-light">

                    <table class="table table-hover table1" id="tabela-caixa">

                        <thead>
                            <tr>
                                <th scope="col">Nº Transação</th>
                                <th scope="col">Data</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/caixa.js"></script>
</asp:Content>
