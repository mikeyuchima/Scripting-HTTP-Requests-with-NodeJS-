var https = require('https');

var getAndPrintHTML = function (options) {
var buffered = '';

  var requestOptions = {
    host: options.host,
    path: options.path
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    buffered += data;
  });
  response.on('end', function() {
    console.log('Response stream complete.');
    console.log(buffered);
  });
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);