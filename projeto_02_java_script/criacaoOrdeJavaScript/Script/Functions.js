function dataAtual()
{
  // Gerar data atual
  var  data_formatada = aqConvert.DateTimeToFormatStr(aqDateTime.Today(),"%d%m%Y");
 Project.Variables.DataAtual 
  if (data_formatada)
  {
    //= data_formatada;
    Log.Message("Data Atual gerada com Sucesso!!!!!, Valor gerado foi: '"+data_formatada+"'");
  }else {
    Log.Error("ERRO! Não foi gerada a data atual no método dataAtual(), o valor retornado foi: '"+data_formatada+"'");
  }
}

/// alteração Jediael

module.exports.dataAtual = dataAtual;