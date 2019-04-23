<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Estoque.aspx.cs" Inherits="pages_Estoque" MasterPageFile="~/master/MasterPage.master" %>


<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/crianca.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="content" runat="server">
    <div id="topo">
        <div>
            <div class="container col-12">
                <h5 class="card-header bg-transparent tituloPagina">Estoque</h5>
            </div>

            <div class="container col-12">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="dropdown">
<%--                            <h6><span class="label label-default">Filtrar por Categoria</span></h6>--%>
                            <button class="btn btn-preto dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filtrar por Categoria
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Alimentos</a>
                                <a class="dropdown-item" href="#">Móveis</a>
                                <a class="dropdown-item" href="#">Material Higiênico</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-12  btnAdicionar" align="right">
                        <button type="button" class="btn btn-labeled btn-preto" id="btnAdicionar" onclick="window.location.href='cadastroEstoque.aspx'">
                            <span class="btn-label"><i class="fa fa-plus"></i>&nbspAdicionar</span>
                        </button>
                    </div>
                    <%--<div class="col col-md-6">
                        <h6><span class="label label-default">Descrição</span></h6>
                        <input type="text" class="form-control formulario" placeholder="Descrição" id="txtDescriçãoMatEstoque">
                    </div>
                    <div class="col col-md-2">
                        <h6><span class="label label-default">Quantidade</span></h6>
                        <input type="text" class="form-control formulario" placeholder="Descrição" id="txtQuantEstoque">
                    </div>
                    <div class="col col-md-2">
                        <h6><span class="label label-default">Valor Unit</span></h6>
                        <input type="text" class="form-control formulario" placeholder="Descrição" id="txtVlUnitMatEstoque">
                    </div>--%>
                </div>
            </div>
        </div>
    </div>

    <div align="center" id="grid">
        <div class="card bg-light">

            <table class="table table-hover table1" id="tabela-estoque">
            </table>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/Estoque.js"></script>
</asp:Content>




