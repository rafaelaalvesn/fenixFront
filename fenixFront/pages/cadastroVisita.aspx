<%@ Page Language="C#" AutoEventWireup="true" CodeFile="cadastroVisita.aspx.cs" Inherits="pages_cadastroVisita" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/formulariosCadastro.css" rel="stylesheet" />
</asp:Content>
<asp:Content ContentPlaceHolderID="content" runat="server">
    <div class="card bg-light col-8 cardForm">
        <div id="titulo" class="card-header tituloFormularios">
            <label>Visitas</label>
            <button id="btnCloseForm" type="button" class="btn btn-labeled btn-transparent" onclick="btnCloseForm()">
                <span class="btn-label"><i class="fa fa-window-close"></i></span>
            </button>
        </div>
        <div class="card-body" id="form">
            <form>

                <div class="form-row">
                    <div class="form-group col-md-7">
                        <label>Nome do Jovem</label>
                        <input type="text" class="form-control formulario" id="nomeJovem">
                    </div>

                    <div class="form-group col-md-5">
                        <label>Nº ordem judicial</label>
                        <input type="number" class="form-control formulario" id="numOrdemJudicial">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label class="obrigatorio">Data</label>
                        <input type="date" class="form-control formulario" id="dataVisita">
                    </div>
                    <div class="form-group col-md-3">
                        <label>Hora</label>
                        <input type="time" class="form-control formulario" id="horaVisita">
                    </div>
                    <div class="form-group col-md-5">
                        <label>Tipo da Visita</label>
                        <select class="form-control formulario" id="tipoVisita">
                            <option value="1">Individual</option>
                            <option value="2">Coletiva</option>
                        </select>
                    </div>
                </div>


                <hr>
                <div class="form-row">
                    <div class="form-group col-md-12">
                        <h4>Visitantes</h4>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-5">
                        <label class="obrigatorio">Nome</label>
                        <input type="text" class="form-control formulario" id="nomeVisitante">
                    </div>
                    <div class="form-group col-md-4">
                        <label>CPF</label>
                        <input data-mask="000.000.000-00" data-mask-selectonfocus="true"  type="text" class="form-control formulario" id="cpfVisitante">
                    </div>
                    <div class="form-group col-md-3">
                        <label>Telefone</label>
                        <input data-mask="(00) 0000-0000" data-mask-selectonfocus="true" type="text" class="form-control formulario" id="TELVisitante">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-12" align="right">
                        <button type="button" class="btn btn-labeled btn-preto formulario" onclick="btnSalvar()">
                            <span class="btn-label"><i class="fa fa-check"></i></span>&nbspSalvar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/cadastroVisita.js"></script>
</asp:Content>
