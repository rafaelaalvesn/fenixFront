<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Visitas.aspx.cs" Inherits="pages_Visitas" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/visitas.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="content" runat="server">
    <div id="topo">
        <div>
            <div class="container col-12">
                <h5 class="card-header bg-transparent tituloPagina">Visitas Agendadas</h5>
            </div>
           
            <div class="container col-12">
                <div class="row">
                    <div class="col-md-3">
                        <input type="date" class="form-control formulario" placeholder="Pesquisar por data" id="txtPesquisa">
                    </div>
                    <div class="col col-md-1">
                        <button type="button" class="btn btn-preto" id="btnPesquisar" onclick="btnPesquisar()">Pesquisar</button>
                    </div>
                    <div class="col col-md-8" align="right">
                        <button type="button" class="btn btn-labeled btn-preto" id="btnNovoCadastro" onclick="btnNovoCadastro()">
                            <span class="btn-label"><i class="fa fa-plus"></i></span>&nbspNova Visita
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <%-- <div align="center" id="grid">
        <div class="card bg-light">

            <table class="table table-hover table1" id="tabela-visitas">
                <tr>
            <td>Data</td>
            <td>Hora</td>
            <td>Jovem Visitado(a)</td>
            <td><button type="button" class="btn btn-default bg-transparent" id="btLapisEditar" onclick="btLapisEditarClick(' + i + ')" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Cadastro" style="float: right">
                <span class="fa fa-pencil"></span>
                </button>;
            <button type="button" class="btn btn-default bg-transparent formulario" id="btnVisualizar" onclick="btnVisualizarClick('+i+')" data-toggle="tooltip" data-container="body" data-placement="top" title="Visualizar Cadastro" style="float: right">
                <span class="fa fa-eye"></span>
            </button>
            </td>
            </tr>
            </table>
        </div>
    </div> --%>

     <div align="center" id="grid">
        <div class="card bg-light">

            <table class="table table-hover table1" id="tabela-visitas">
                        <thead>
            <tr>
              <th scope="col">Jovem</th>
              <th scope="col">Visitante</th>
              <th scope="col">Data</th>
              <th scope="col">Hora</th>
            </tr>
          </thead>
            </table>
        </div>
    </div> 

</asp:Content>
  <asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/visitas.js"></script>
        </asp:Content>
   