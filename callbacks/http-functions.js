var https = require('https');

module.exports = function getHTML (options, callback) {
    var html = '';

    var requestOptions = {
      host: options.host,
      path: options.path
    };
  
    https.get(requestOptions, function (response) {
      response.setEncoding('utf8');
      // callback;
      // console.log('HTML IS:', callback());
  
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      html += data;
    });
    response.on('end', function() {
      console.log('Response stream complete.');
      callback(html);
    });
    });
  }
  
  // function printHTML (html) {
  //   console.log(html);
  // }
  
//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step4.html'
//   };

// getHTML(requestOptions, printHTML);