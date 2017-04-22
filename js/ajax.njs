#!/usr/local/bin/node

var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);

var fs = require('fs');
var nameList = JSON.parse(fs.readFileSync('./data/name.json', 'utf8'));

console.log('Content-type: text/html; charset="utf-8"\n');

setTimeOut(function() {
    console.log('<h1> ' + nameList[param.id] + '</h1>');
}, 1000);