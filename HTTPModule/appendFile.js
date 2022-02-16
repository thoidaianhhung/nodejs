var http = require('http');
var fs = require('fs');
http.createServer( function(req, res) {
    fs.appendFile('newFile.txt', 'Hello node.js', function(err) {
        if(err) throw err;
        console.log('Saved!');
    })
}).listen(8080);