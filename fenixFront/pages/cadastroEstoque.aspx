<%@ Page Language="C#" AutoEventWireup="true" CodeFile="cadastroEstoque.aspx.cs" Inherits="pages_cadastroEstoque" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/formulariosCadastro.css" rel="stylesheet" />
</asp:Content>
<asp:Content ContentPlaceHolderID="content" runat="server">
    <div class="card bg-light cardForm">
        <div id="titulo" class="card-header tituloFormularios">
            <label class="col-11">Cadastro de Estoque</label>
            <button id="btnCloseForm" type="button" class="btn btn-labeled btn-transparent" onclick="btnCloseForm()">
                <span class="btn-label"><i class="fa fa-window-close"></i></span>
            </button>
        </div>
        <div class="card-body" id="form">
            <form>
                <div class="container col-12">
                    <div class="form-row">
                        <div class="form-group col-md-1">
                            <label>Id</label>
                            <input type="text" class="form-control" id="codigo" disabled>
                        </div>
                        <div class="form-group col-md-3">
                            <%--                        <div class="col-md-6 col-sm-12">--%>
                            <label>Categoria</label>

                            <div class="dropdown">
                                <button class="btn btn-preto dropdown-toggle" type="button" id="dropdownMenuButtonCategorias" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categoria do Produto
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownCategorias">
                                </div>
                            </div>
                            <%--</div>--%>
                        </div>
                        <div class="form-group col-md-4">
                            <label>Descrição</label>
                            <input type="text" class="form-control formulario" id="descricao">
                        </div>                         

                        <div class="form-group col-md-3">
                            <label>Data Validade</label>
                            <input type="date" class="form-control formulario" id="dataValidade">
                        </div>
                         <div class="form-group col-md-1">
                            <label>Quantidade</label>
                            <input type="text" class="form-control formulario" id="unidade">
                        </div>
                    </div>
                </div>
                 <div class="form-row">
                    <div class="form-group col-md-12" align="right">
                        <button id="btnSalvarEstoque" type="button" class="btn btn-labeled btn-preto" onclick="btnSalvarEstoque()"> 
                            <span class="btn-label"><i class="fa fa-check"></i></span>&nbspSalvar
                        </button>          
                    </div>
                </div>
            </form>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/cadastroEstoque.js"></script>
</asp:Content>
