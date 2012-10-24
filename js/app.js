var link          = $('#favicon').clone();
var statuses      = ['green', 'orange', 'red'];
var currentStatus = 0;
var timer         = setInterval(switchFavicon, 3000);

function switchFavicon() {
  if (currentStatus === 3) currentStatus = 0;
  // for Chrome
  $('#favicon').attr({href: '../status-icon-'+statuses[currentStatus]+'.png'});
  // for Firefox
  $(link).attr({href: '../status-icon-'+statuses[currentStatus]+'.png'});
  $('body').append(link);
  currentStatus += 1;
}