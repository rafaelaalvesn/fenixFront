<%@ Page Language="C#" AutoEventWireup="true" CodeFile="home.aspx.cs" Inherits="pages_home" MasterPageFile="~/master/MasterPage.master"%>

<asp:Content ContentPlaceHolderID="header" runat="server"></asp:Content>
<asp:Content ContentPlaceHolderID="content" runat="server">

        <div style="height:20px"></div>  <!--Gambs pra fazer os cards ficar no meio - arrumar-->

    <div class="row" id="cards" >
        <div class="col-md-3">
            <div class="card bg-warning mb-3">
                <img class="card-img-top" src="~/img/children.png" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text" id="cardstxt">@Html.ActionLink("Crianças", "Criancas", "Criancas")</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-warning mb-3">
                <img class="card-img-top" src="~/img/visit-cards.png" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text" id="cardstxt">Visitas</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-warning mb-3">
                <img class="card-img-top" src="~/img/warehouse.png" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text" id="cardstxt">Estoque</p>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card bg-warning mb-3">
                <img class="card-img-top" src="~/img/cash-register.png" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text" id="cardstxt">Caixa</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="lembretes">
        <div class="card col-md-12 bg-light">
         
                <h5 class="card-header">Lembretes </h5>
                <div class="card-body">
                    <form>
                        <div class="form-row">
                            <div class="col-md-10">
                                <input type="text" id="txtAdicionar" class="form-control" placeholder="Digite aqui a tarefa" style="min-width:100%;">
                            </div>
                            <div class="col-md-2">
                                <button type="button" class="btn btn-primary" onclick="novoItem()">Adicionar Tarefa</button>
                            </div>
                        </div>

                    </form>             
            </div>
                <div style="margin-bottom:15px;">
                    <ul id="lista" class="list-group">
                        <li class="list-group-item" style="text-align:center">Elogiar alguém</li>
                    </ul>
                </div>
            </div>
        </div>
        <script src="~/Scripts/ToDoList.js"></script>
</asp:Content>