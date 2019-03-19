<%@ Page Language="C#" AutoEventWireup="true" CodeFile="cadastroCrianca.aspx.cs" Inherits="pages_cadastroCrianca" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/formulariosCadastro.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="content" runat="server">
     <div class="card bg-light col-12">
        <div id="titulo" class="card-header tituloFormularios">
            <label>Crianças</label>
            <button id="btnCloseForm" type="button" class="btn btn-labeled btn-transparent" onclick="btnCloseForm()">
                            <span class="btn-label"><i class="fa fa-window-close"></i></span>
                        </button>   
        </div>
        <div class="card-body" id="form">
            <form>
        

                <div class="form-row">
                    <div class="form-group col-md-2">
                        <label>Código</label>
                        <input type="text" class="form-control" disabled>
                    </div>
                    <div class="form-group  col-md-5">
                        <label class="obrigatorio">Nome</label>
                        <input type="text" class="form-control formulario">
                    </div>
                    <div class="form-group  col-md-2">
                        <label>Status</label>
                        <select class="form-control formulario">
                            <option>Ligado</option>
                            <option>Desligado</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label class="obrigatorio">Sexo</label>
                        <select class="form-control formulario">
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputCity">RG</label>
                        <input type="text" class="form-control formulario">
                    </div>
                    <div class="form-group col-md-4">
                        <label>CPF</label>
                        <input id="cpf" type="text" class="form-control formulario">
                    </div>
                    <div class="form-group  col-md-4">
                        <label class="obrigatorio">Data de Nasc.</label>
                        <input type="date" class="form-control formulario">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-2">
                        <label>CEP</label>
                        <input id="cep" type="text" class="form-control formulario">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputCity">Rua</label>
                        <input type="text" class="form-control formulario">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputCity">Nº</label>
                        <input type="text" class="form-control formulario">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputCity">Bairro</label>
                        <input type="text" class="form-control formulario">
                    </div>
                </div>
                <hr />
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label>Responsável</label>
                        <select class="form-control formulario">
                            <option>Mãe</option>
                            <option>Pai</option>
                            <option>Outro</option>
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputCity">Outro Responsável</label>
                        <input type="text" class="form-control formulario">
                    </div>
                    <div class="form-group col-md-4">
                        <label>Nome do Responsável</label>
                        <input type="text" class="form-control formulario">
                    </div>
                </div>

                <hr />

                <div class="form-row">
                    <div class="form-group  col-md-4">
                        <label class="obrigatorio">Data da Entrada.</label>
                        <input type="date" class="form-control formulario">
                    </div>
                    <div class="form-group  col-md-4">
                        <label>Data de Saída</label>
                        <input type="date" class="form-control formulario">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputCity">Motivo da Saída</label>
                        <input type="text" class="form-control formulario">
                    </div>
                </div>
                <hr />
                <div class="form-row">               
                    <div class="form-group col-md-12" align="right">
                        <button type="button" class="btn btn-labeled btn-preto">
                            <span class="btn-label"><i class="fa fa-check"></i></span>&nbspSalvar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</asp:Content>

<asp:Content ContentPlaceHolderID="scripts" runat="server">
    <script src="../.js/jquery-2.1.4.js"></script>
    <script src="../.js/crianca.js"></script>
</asp:Content>
