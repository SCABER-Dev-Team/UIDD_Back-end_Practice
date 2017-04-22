#!/usr/local/bin/node

/* Include library */
var fs = require('fs');
var qs = require('qs');

/* Parse JSON file for name list */
var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));

/* Parse JSON file for name list */
var nameList = JSON.parse(fs.readFileSync('./data/name.json', 'utf8'));

/* Return normal HTML content */
console.log('Content-type: text-html; charset=utf-8\n')
console.log('<h1>Hello, ' + nameList[param.id] + '</h1>');