var Functions = require("Functions");
var comp_04_verificar_existencia_order = require("comp_04_verificar_existencia_order");
var Comp_03_criacao_order = require("Comp_03_criacao_order");
var Comp_02_grid_inicial_order = require("Comp_02_grid_inicial_order");
var Comp_01_abrir_aplicacao = require("Comp_01_configuracao_inicial");

function crialcao_order()
{
  // Iniciar configuração
 // Functions.dataAtual();
  
  //abrir a aplicação
  Comp_01_abrir_aplicacao.abrir_aplicacao();
  
  //Inicio do For de multiplos itens 
  for(var i = 0; i < Project.Variables.ParametroEntrada.RowCount; i++)
  {
    //Selecionar Nova Ordem no menu principal
    Comp_02_grid_inicial_order.menu_order("Orders|New order...");
  
    //Selecionar o produto
    //Comp_03_criacao_order.selecionar_produto("ScreenSaver");
    Log.Message(Project.Variables.ParametroEntrada.Produto(i));
    Comp_03_criacao_order.selecionar_produto(Project.Variables.ParametroEntrada.Produto(i));
  
    //Inserir a quantidade
    //Comp_03_criacao_order.inserir_quatidade(10);
    Comp_03_criacao_order.inserir_quatidade(Project.Variables.ParametroEntrada.Quantidade(i));
  
    //inserir o valor
    //Comp_03_criacao_order.inserir_preco(20);
    Comp_03_criacao_order.inserir_preco(Project.Variables.ParametroEntrada.Preco(i));
  
    //Inserir o desconto
    //Comp_03_criacao_order.inserir_desconto(10);
    Comp_03_criacao_order.inserir_desconto(Project.Variables.ParametroEntrada.Desconto2(i));
  
    //Verificar o total
   // Comp_03_criacao_order.verificacao_total(10,20,10);
   Comp_03_criacao_order.verificacao_total(Project.Variables.ParametroEntrada.Total(i));
   
    //Inserir a Data
    Comp_03_criacao_order.inserir_data(Project.Variables.DataAtual);
    
    //clicar no botão OK
    Comp_03_criacao_order.clicar_btn_ok();
  }     
  //Fim do loop
  
  //Validar que foi criada a ordem
  comp_04_verificar_existencia_order.validar_ordem_criada();
  
  //Validar Grid com Ordem criada
  Comp_01_abrir_aplicacao.fechar_aplicacao();
}