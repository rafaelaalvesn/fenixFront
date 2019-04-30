<%@ Page Language="C#" AutoEventWireup="true" CodeFile="RecursosHumanos.aspx.cs" Inherits="pages_RecursosHumanos" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/rh.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="content" runat="server">
    <div id="topo">
        <div>

            <div class="container col-12">
                <h5 class="card-header bg-transparent tituloPagina">Recursos Humanos</h5>
            </div>
            
            <div class="container col-12">
                <div class="row">
                   <div class="col-md-6 col-sm-12">
                        <div class="dropdown">
                            <button class="btn btn-preto dropdown-toggle" type="button" id="dropdownMenuButtonTipoUsuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filtrar por Tipo de Usuário
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownTipoUsuario">
                       
                                     <a class="dropdown-item" id="UsuariosAll" onclick="reloadPage()">Todos os Usuários</a>
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-md-6 col-sm-12" align="right">
                        <button type="button" class="btn btn-labeled btn-preto" id="btnNovoCadastro" onclick="btnNovoCadastro()">
                            <span class="btn-label"><i class="fa fa-plus"></i>&nbspNovo Cadastro</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div align="center" id="grid">
        <div class="card bg-light">

            <table class="table table-hover table1" id="tabela-rh">           
                <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Tipo de Usuário</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
            </table>
        </div>
    </div> 
</asp:Content>
  <asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/rh.js"></script>
        </asp:Content>
   

