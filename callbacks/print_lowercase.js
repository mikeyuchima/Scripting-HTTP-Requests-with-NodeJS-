var getHTML = require('./http-functions');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printUpperCase (html) {
    html = html.toLowerCase();
    console.log(html)
}

getHTML(requestOptions, printUpperCase);