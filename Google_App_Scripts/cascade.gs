function helpScript(){
  Browser.msgBox('How to use this', '1. Past all data in your table here;\\n2. Click the Examined Material menu, then Format...;\\n3. Click Generate...;\\n 4. Type the taxon name in the pop-up;\\n5. Wait a few moments and the merged document will appear on your GDrive;\\n6. Refresh your browser to start another list', Browser.Buttons.OK);
}

function aboutScript() {
  Browser.msgBox('Script wrote by Laura Rocha Prado, version 2013.\\n<laurarochaprado@gmail.com>',Browser.Buttons.OK);
}


function workRobot() {
  sumData();
  wordSex();
  wordSexInst();
  formatCountry();
  copyFormCountry();
  copyFormSexInst();
  queryAndMerge();
  deleteQueryTable();
}

function onInstall(){
  helpScript();
}
  