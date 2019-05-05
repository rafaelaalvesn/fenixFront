<%@ Page Language="C#" AutoEventWireup="true" CodeFile="cadastroUsuario.aspx.cs" Inherits="pages_cadastroUsuario" MasterPageFile="~/master/MasterPage.master" %>


<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/formulariosCadastro.css" rel="stylesheet" />
</asp:Content>
<asp:Content ContentPlaceHolderID="content" runat="server">
    <div class="card bg-light cardForm">
        <div id="titulo" class="card-header tituloFormularios">
            <label class="col-11">Cadastro de Usuário</label>
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
                            <label>Usuário</label>

                            <div class="dropdown">
                                <button class="btn btn-preto dropdown-toggle" type="button" id="dropdownMenuButtonUsuarios" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Nome do Usuário
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownUsuarios">
                                </div>
                            </div>
                        </div>
                              <div class="form-group col-md-3">
                            <label>Tipo Usuário</label>

                            <div class="dropdown">
                                <button class="btn btn-preto dropdown-toggle" type="button" id="dropdownMenuButtonTipoUsuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tipo Usuário
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdownTipoUsuario">
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-md-4">
                            <label>E-mail</label>
                            <input type="text" class="form-control formulario" id="email">
                        </div> 
                         <div class="form-group col-md-4">
                            <label>Login</label>
                            <input type="text" class="form-control formulario" id="login">
                        </div>  
                         <div class="form-group col-md-3">
                            <label>Senha</label>
                            <input type="password" class="form-control formulario" id="senha">
                        </div>
                         <div class="form-group col-md-3">
                            <label>Confirnação de Senha</label>
                            <input type="password" class="form-control formulario" id="confSenha">
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

    <!-- Modal -->
<div class="modal fade" id="modalNovaCategoria" tabindex="-1" role="dialog" aria-labelledby="modalNovaCategoria" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Nova Categoria</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body col-12">
            <div class="form-row">
           <div class="form-group col-md-2 col-sm-12">
    <label for="exampleInputPassword1">ID</label>
    <input type="text" class="form-control" id="inputIdNovaCategoria" placeholder="ID" disabled>
  </div>
         <div class="form-group col-md-10 col-sm-10">
    <label for="exampleInputPassword1">Nome da Categoria</label>
    <input type="text" class="form-control" id="inputNomeCategoria" placeholder="Categoria">
  </div>
           <div class="form-group col-md-12 col-sm-12">
    <div class="form-check" onclick="possuiValidade()">
      <input class="form-check-input" type="checkbox" id="possuiValidade">
      <label class="form-check-label" for="gridCheck">
        Possui Validade
      </label>
    </div>
  </div>
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        <button type="button" class="btn btn-preto" id="btnSalvarNovaCategoria" onclick="btnSalvarNovaCategoria()">Salvar</button>
      </div>
    </div>
  </div>
</div>
</asp:Content>
<asp:Content ContentPlaceHolderID="scriptsPagina" runat="server">
    <script src="../.js/cadastroUsuario.js"></script>
</asp:Content>
