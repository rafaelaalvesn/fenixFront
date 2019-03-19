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

            <table class="table table-hover table1">
                <!-- INÍCIO DA ROW-->
                <tr>
                    <td id="nome" class="col-8">ANA MARIA DE SOUZA PEREIRA</td>
                    <td class="col-2">LIGADA</td>
                    <td class="col-2">
                        <button type="button" class="btn btn-default bg-transparent" id="btLapisEditar" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Cadastro" style="float: right">
                            <span class="fa fa-pencil"></span>
                        </button>
                        <button type="button" class="btn btn-default bg-transparent formulario" id="btnVisualizar" onclick="btnVisualizar()" data-toggle="tooltip" data-container="body" data-placement="top" title="Visualizar Cadastro" style="float: right">
                            <span class="fa fa-eye"></span>
                        </button>
                    </td>
                </tr>

                <tr>
                    <td class="col-8">ANA MARIA DE SOUZA PEREIRA</td>
                    <td class="col-2">LIGADA</td>
                    <td class="col-1">
                </tr>
                <!-- FIM DA ROW-->

                <!-- INÍCIO DA ROW-->
                <tr>
                    <td class="col-6">PEDRO PAULO FERREIRA</td>
                    <td class="col-2">DESLIGADO</td>
                    <td class="col-2">
                        <button type="button" class="btn btn-default bg-transparent" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Cadastro" style="float: right">
                            <span class="fa fa-pencil"></span>
                        </button>
                    </td>
                </tr>
                <!-- FIM DA ROW-->

                <!-- INÍCIO DA ROW-->
                <tr>
                    <td class="col-6">ITALO FABRÍCIO GOMES COURA</td>
                    <td class="col-2">LIGADO</td>
                    <td class="col-2">
                        <button type="button" class="btn btn-default bg-transparent" data-toggle="tooltip" data-container="body" data-placement="top" title="Editar Cadastro" style="float: right">
                            <span class="fa fa-pencil"></span>
                        </button>
                    </td>
                </tr>
                <!-- FIM DA ROW-->
            </table>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scripts" runat="server">
    <script src="../.js/crianca.js"></script>
</asp:Content>
