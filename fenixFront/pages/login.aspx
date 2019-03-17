<%@ Page Language="C#" AutoEventWireup="true" CodeFile="login.aspx.cs" Inherits="pages_login" MasterPageFile="~/master/MasterPage.master" %>


<asp:Content ContentPlaceHolderID="head" runat="server">
  <link href="../css/login.css" rel="stylesheet" />
</asp:Content>

<asp:Content ContentPlaceHolderID="header" runat="server">
</asp:Content>
<asp:Content ContentPlaceHolderID="content" runat="server">
<div align="center" id="tela">
    <div class="card bg-transparent col-5" id="login">
        <div class="card-body">
            <form>
                <div><img src="../img/fenix-logo-w.png" /></div>
                <label id="textTitle">ABRIGO FÊNIX </label>
                <div class="form-group">
                   
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Login">
                </div>
                <div class="form-group">
          
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
                </div>
                <button type="button" class="btn btn-outline-white" id="btnLogin" onclick="btnLogin()">Entrar</button>
            </form>
        </div>

    </div>
</div>
    </asp:Content>
<asp:Content ContentPlaceHolderID="scripts" runat="server">
    <script src="../.js/login.js"></script>
</asp:Content>

<asp:Content ContentPlaceHolderID="footer" runat="server"></asp:Content>
