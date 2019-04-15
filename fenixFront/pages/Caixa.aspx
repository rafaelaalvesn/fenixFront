<%@ Page Language="C#" AutoEventWireup="true" CodeFile="caixa.aspx.cs" Inherits="pages_caixa" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/caixa.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="content" runat="server">
    <div id="topo">

        <div class="container col-12">
            <h5 class="row card-header bg-transparent tituloPagina">Caixa</h5>
                                   <div class="row">
                <div class="divTitulo col-10" style="text-align:left">
                    <h6 class="card-header bg-transparent tituloPagina">Últimas Transações</h6>
                </div>

                <%-- botão para nova transação --%>
                <div class="divBtnTransacao col-2" align="right">
                    <button type="button" class="btn btn-labeled btn-preto" id="btnNovaTransacao" onclick="btnNovaTransacao()">
                        <span class="btn-label"><i class="fa fa-plus"></i></span>&nbspNova Transacao
                    </button>
                </div>
                <%-- fim do botão para nova transação --%>
            </div>

            <div class="row">
                <div class="col-12 teste">
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/caixa.js"></script>
</asp:Content>
