var https = require('https');

module.exports = function getHTML (options, callback) {
    var buffered = '';

    var requestOptions = {
      host: options.host,
      path: options.path
    };
  
    https.get(requestOptions, function (response) {
      response.setEncoding('utf8');
      callback;
  
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
  
  function printHTML (html) {
    console.log(html);
  }
  
//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step4.html'
//   };

// getHTML(requestOptions, printHTML);