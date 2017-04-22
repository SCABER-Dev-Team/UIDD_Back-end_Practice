#!/usr/local/bin/node

/* Parse query to objet */
var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);


var fs = require('fs');
var nameList = JSON.parse(fs.readFileSync('./data/name.json', 'utf8'));

/* Return header to browser */
console.log('Content-type: text/html; charset=utf-8\n');

/* Return normal HTML content */
console.log('<h1>Hello, ' + nameList[param.id] + '</h1>');