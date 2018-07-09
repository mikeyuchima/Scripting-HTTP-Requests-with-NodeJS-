var getHTML = require('./http-functions');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printUpperCase (html) {
    html = html.split('').reverse().join('');
    console.log(html)
}

getHTML(requestOptions, printUpperCase);