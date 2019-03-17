<%@ Page Language="C#" AutoEventWireup="true" CodeFile="home.aspx.cs" Inherits="pages_home" MasterPageFile="~/master/MasterPage.master"%>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <link href="../css/home.css" rel="stylesheet" />
</asp:Content>
<asp:Content ContentPlaceHolderID="header" runat="server"></asp:Content>
<asp:Content ContentPlaceHolderID="content" runat="server">
          
    <div class="circlesGroup">       
    <span id="criancas" class="circle shadow-drop-2-center" onclick="location='/pages/crianca.aspx'">     
        <img src="../img/children.png"/><label>Jovens</label>
    </span>
    <span id="visitas" class="circle shadow-drop-2-center">
        <img src="../img/visitor.png" /><label>Visitas</label>
    </span>
    <span id="estoque" class="circle shadow-drop-2-center">
        <img src="../img/warehouse.png" /><label>Estoque</label>
    </span>
    <span id="caixa" class="circle shadow-drop-2-center">
        <img src="../img/caixa.png" /><label>Caixa</label>
    </span>
    <span id="controleUsuarios" class="circle shadow-drop-2-center">
        <img src="../img/user.png" /><label>Controle de Usuários</label>
    </span>
        </div>
        <script src="~/Scripts/ToDoList.js"></script>
</asp:Content>
<asp:Content ContentPlaceHolderID="scripts" runat="server">
    <script src="../.js/home.js"></script>
</asp:Content>