var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
  console.log('console.log("'+ msg + '")');
};
page.open('http://www.baidu.com', function(status) {
  page.evaluate(function() {
    console.log(document.title);
  });
  phantom.exit();
});
