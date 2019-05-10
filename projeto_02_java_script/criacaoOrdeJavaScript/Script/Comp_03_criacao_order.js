function selecionar_produto(prod)
{//"ScreenSaver"
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem(prod);
}

function inserir_quatidade(qtd)
{
  Aliases.Orders.OrderForm.Group.Quantity.wValue = qtd;
}

function inserir_preco(preco)
{
  Aliases.Orders.OrderForm.Group.Price.SetText(preco);
}

function inserir_desconto(desc)
{
  Aliases.Orders.OrderForm.Group.Discount.SetText(desc);
}

function verificacao_total(total)
{
   if (aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.groupBox1.Total, "wText", cmpEqual, total))
   {
     Log.Message("O valor total desejado '"+total+"' é igual ao valor esperado");
   }else {
     Log.Error("Total não corresponde ao desejado: "+total);
   }
   //aqObject.CallMethod(Aliases.Orders.MainForm.OrdersView, "wItemCount");
}

function clicar_btn_ok()
{
  Aliases.Orders.OrderForm.ButtonOK.ClickButton();
  
  //aqObject.CheckProperty(Aliases.Orders.dlgWarning.btnOK, "WndCaption", cmpEqual, "OK"
  if (Aliases.Orders.dlgWarning.btnOK.Exists)
  {
    Aliases.Orders.dlgWarning.btnOK.ClickButton();
  }
}

function inserir_data(datas)
{
  Aliases.Orders.wndOrder.data.Item.wDate = datas;
}

module.exports.selecionar_produto = selecionar_produto;
module.exports.inserir_quatidade = inserir_quatidade;
module.exports.inserir_preco = inserir_preco;
module.exports.inserir_desconto = inserir_desconto;
module.exports.verificacao_total = verificacao_total;
module.exports.clicar_btn_ok = clicar_btn_ok;
module.exports.inserir_data = inserir_data;
