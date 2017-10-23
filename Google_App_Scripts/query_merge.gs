function queryAndMerge() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var querySheet = ss.getSheetByName('query');
  var array = querySheet.getRange('A1:G');
  var result = new Array();
  var num=0;
  result[num] = new Array();
//  var taxon = Browser.inputBox("Insira o nome do táxon (o nome do arquivo será o nome do táxon)", Browser.Buttons.OK_CANCEL);
  var taxon = "Escravo_do_Sime_teste"
  
  var countryFirst = (array.getValues()[0][0]);
  var stateFirst = (array.getValues()[0][1]);
  var cityFirst = (array.getValues()[0][2]);
  var locFirst = (array.getValues()[0][3]);
  var legFirst = (array.getValues()[0][4]);
  var fFirst = (array.getValues()[0][5]);
  var mFirst = (array.getValues()[0][6]);
