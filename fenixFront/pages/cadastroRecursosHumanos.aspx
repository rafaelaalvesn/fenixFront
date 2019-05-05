<%@ Page Language="C#" AutoEventWireup="true" CodeFile="cadastroRecursosHumanos.aspx.cs" Inherits="pages_cadastroRecursosHumanos" MasterPageFile="~/master/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/formulariosCadastro.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="content" runat="server">
     <div class="card bg-light col-12">
        <div id="titulo" class="card-header tituloFormularios">
            <label>Recursos Humanos</label>
            <button id="btnCloseForm" type="button" class="btn btn-labeled btn-transparent" onclick="btnCloseForm()">
                            <span class="btn-label"><i class="fa fa-window-close"></i></span>
                        </button>   
        </div>
        <div class="card-body" id="form">
            <form>      
                <div class="form-row">
                    <div class="form-group col-md-1">
                        <label>Código</label>
                        <input type="text" class="form-control" id="codigo" disabled>
                    </div>
                    <div class="form-group  col-md-4">
                        <label class="obrigatorio">Nome</label>
                        <input type="text" class="form-control formulario" id="nome">
                    </div>
                    <div class="form-group  col-md-2">
                        <label>Status</label>
                        <select class="form-control formulario" id="ligadoDesligado">
                            
                        </select>
                    </div>
                    <div class="form-group col-md-1">
                        <label class="obrigatorio">Sexo</label>
                        <select class="form-control formulario" id="sexo">
                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label>E-mail</label>
                        <input type="text" class="form-control formulario" id="email">                       
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="inputCity">RG</label>
                        <input type="text" class="form-control formulario" id="RG">
                    </div>
                    <div class="form-group col-md-4">
                        <label>CPF</label>
                        <input data-mask="000.000.000-00" data-mask-selectonfocus="true" type="text" class="form-control formulario" id="CPF">
                    </div>
                    <div class="form-group  col-md-4">
                        <label class="obrigatorio">Data de Nasc.</label>
                        <input type="date" class="form-control formulario" id="dataNascimento">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-2">
                        <label>CEP</label>
                        <input data-mask="00.000-000" data-mask-selectonfocus="true" type="text" class="form-control formulario" id="CEP">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputCity">Rua</label>
                        <input type="text" class="form-control formulario" id="rua">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputCity">Nº</label>
                        <input type="text" class="form-control formulario" id="numero">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputCity">Bairro</label>
                        <input type="text" class="form-control formulario" id="bairro">
                    </div>
                </div>
                <hr />
                <div class="form-row">
                    <div class="form-group  col-md-3">
                        <label class="obrigatorio">Data da Entrada.</label>
                        <input type="date" class="form-control formulario" id="dataEntrada">
                    </div>
                    <div class="form-group  col-md-4">
                        <label>Data de Saída</label>
                        <input type="date" class="form-control formulario" id="dataSaida">
                    </div>  
                     <div class="form-group col-md-3">
                        <label class="obrigatorio">Cidade</label>
                        <input type="text" class="form-control formulario" id="cidade">
                    </div>    
                     <div class="form-group col-md-2">
                        <label class="obrigatorio">UF</label>
                        <input type="text" class="form-control formulario" id="uf">
                    </div>                
                </div>
                <hr />
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
    <script src="../.js/cadastroCrianca.js"></script>
</asp:Content>

    

