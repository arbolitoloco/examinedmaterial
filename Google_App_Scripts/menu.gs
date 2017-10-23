function createMenu() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var menuEntries = [];
   
  menuEntries.push({name: 'Format original table', functionName: 'formatPreSource'});
  menuEntries.push({name: 'Generate examined material list', functionName: 'workRobot'});
  menuEntries.push({name: 'How to use this', functionName: 'helpScript'});
  menuEntries.push({name: 'About this', functionName: 'aboutScript'});
 
//  menuEntries.push({name: 'sumData', functionName: 'sumData'});
//  menuEntries.push({name: 'wordSex', functionName: 'wordSex'});
//  menuEntries.push({name: 'wordSexInst', functionName: 'wordSexInst'});
//  menuEntries.push({name: 'formatCountry', functionName: 'formatCountry'});
//  menuEntries.push({name: 'copyFormCountry', functionName: 'copyFormCountry'});
//  menuEntries.push({name: 'copyFormSexInst', functionName: 'copyFormSexInst'});
//  menuEntries.push({name: 'queryAndMerge', functionName: 'queryAndMerge'});
//  menuEntries.push({name: 'deleteQueryTable', functionName: 'deleteQueryTable'});
//  
  ss.addMenu("Examined Material", menuEntries) 
}
