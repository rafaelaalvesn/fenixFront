﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Estoque.aspx.cs" Inherits="pages_Estoque" MasterPageFile="~/master/MasterPage.master" %>


<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/estoque.css" rel="stylesheet" />
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
                            <button class="btn btn-preto dropdown-toggle" type="button" id="dropdownMenuButtonCategorias" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filtrar por Categoria
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownCategorias">
                       
                                     <a class="dropdown-item" id="estoqueAll" onclick="reloadPage()">Todos os Itens</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-12  btnAdicionar" align="right">
                        <button type="button" class="btn btn-labeled btn-preto" id="btnNovoCadastro" onclick="btnNovoCadastro()">
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

                <thead>
            <tr>
              <th scope="col">Categoria</th>
              <th scope="col">Descrição</th>
              <th scope="col">Unidade</th>
              <th scope="col">Data Validade</th>
            </tr>
          </thead>

            </table>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/Estoque.js"></script>
</asp:Content>




