<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Estoque.aspx.cs" Inherits="pages_Estoque" MasterPageFile="~/master/MasterPage.master" %>


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
                </div>
            </div>
        </div>
    </div>
    <div align="center" id="grid">
        <div class="card bg-light col-12">

            <table class="table table-hover table1" id="tabela-estoque">

                <thead>
            <tr>
              <th scope="col">Categoria</th>
              <th scope="col">Descrição</th>
              <th scope="col">Qtd.</th>
              <th scope="col">Data Validade</th>
              <th scope="col">Excluir/Editar</th>
                

            </tr>
          </thead>
            </table>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/estoque.js"></script>
</asp:Content>




