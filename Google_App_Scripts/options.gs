var mark0 = '';
var mark1 = '';

function optMarkup(opt) {
  switch(opt){
    case 'clear':
      mark0 = '';
      mark1 = '';
      Logger.log('markups are cleared');
      break;
    case 'bold':
      mark0 = mark0 + '{bold0}';
      mark1 = mark1 + '{bold1}';
      break;
    case 'italic':
      mark0 = mark0 + '{italic0}';
      mark1 = mark1 + '{italic1}';
      break;
    case 'underlined':
      mark0 = mark0 + '{under0}';
      mark1 = mark1 + '{under1}';
      break;
  }
}

optMarkup('bold');
optMarkup('underlined');

