var http = require('http');
var fs = require('fs');
http.createServer( function(req, res) {
    fs.writeFile('newFile1.txt', 'Toi la Hung', function(err) {
        if(err) throw err;
        console.log('Saved!');
    })
}).listen(8080)