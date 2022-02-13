var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end('Hello World\n');
}).listen(8080);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);

function sayHello() {
    console.log("Hello Node.js");
}

function logSaying(fn) {
    fn();
}

logSaying(sayHello);