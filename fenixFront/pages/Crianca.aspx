<%@ Page Language="C#" AutoEventWireup="true" CodeFile="crianca.aspx.cs" Inherits="pages_cadastroCriancas" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/crianca.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="content" runat="server">
    <div id="topo">
        <div>
            <div class="container col-12">
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control formulario" placeholder="Pesquisar Jovem" id="txtPesquisa">
                    </div>
                    <div class="col col-md-1">
                        <button type="button" class="btn btn-preto" id="btnPesquisar" onclick="btnPesquisar()">Pesquisar</button>
                    </div>
                    <div class="col col-md-7" align="right">
                        <button type="button" class="btn btn-labeled btn-preto" id="btnNovoCadastro" onclick="btnNovoCadastro()">
                            <span class="btn-label"><i class="fa fa-plus"></i></span>&nbspNovo Cadastro
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div align="center" id="grid">
        <div class="card bg-light">

            <table class="table table-hover table1" id="tabela-jovem">
            </table>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scripts" runat="server">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="../.js/crianca.js"></script>
</asp:Content>
