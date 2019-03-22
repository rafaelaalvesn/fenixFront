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
                    <div class="col-md-2">
                        <h6><span class="label label-default">Categorias</span></h6>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Selecione Categoria
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Alimentos</a>
                                <a class="dropdown-item" href="#">Móveis</a>
                                <a class="dropdown-item" href="#">Material Higiênico</a>
                            </div>
                        </div>
                    </div>
                    <div class="col col-md-6">
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
                    </div>
                </div>
            </div>
        </div>
    </div>

</asp:Content>
<asp:Content ContentPlaceHolderID="scripts" runat="server">
    <script src="../.js/bootstrap.min.js"></script>
</asp:Content>




