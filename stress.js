var URL = 'http://localhost:8080';
var totalTime = 30;

var page = require('webpage').create();
page.open(URL, function(status) {
  console.log('connected with:' + status);
  /*
  if (status === 'success') {
    page.open(URL + '/feed', function () {
      console.log('Feed page status: ' + status);
    });
  }
  page.evaluate(function() {
  });
  */
});

window.setTimeout(function () {
  window.setTimeout(function() {
    console.log('closing phantom');
    phantom.exit();
  }, 1000);
}, totalTime*1000);
