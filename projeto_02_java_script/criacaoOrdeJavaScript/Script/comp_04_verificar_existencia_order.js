﻿function validar_ordem_criada()
{
  aqObject.CheckProperty(Aliases.Orders.MainForm.OrdersView, "wItemCount", cmpMatches,  "[0-9]+");
}

module.exports.validar_ordem_criada = validar_ordem_criada;