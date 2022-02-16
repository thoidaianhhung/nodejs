var http = require('http');

http.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<form action="fileupload" method = "post" enctype = "multipart/form-data">');
    res.write('Xin chao: <intput type="file" name="filetupload"/><br>');
    res.write('<input type="submit"/>');
    res.write('</form>');
    return res.end();
}).listen(8080);