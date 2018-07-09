var getHTML = require('./http-functions');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
    html = html.toUpperCase();
    console.log(html)
}

getHTML(requestOptions, printUpperCase);