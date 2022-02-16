var http = require('http');
var address = 'http://localhost:8080/index.html?year=2022&month=February';
var url = require('url');
var q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
