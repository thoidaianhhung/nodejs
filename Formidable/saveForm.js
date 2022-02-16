var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer( function(req, res) {
    if (req.url == "/fileupload") {
        var form = formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.filetoupload.filepath;
            var newpath = 'D:\Nodejs\Formidable' + files.filetoupload.orginalFilename;
            fs.rename(oldpath, newpath, function(err) {
                if(err) throw err;
                res.write('File upload and moved');
                res.end();
            });
        });
            
    } else{
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('<form action="fileupload" method = "post" enctype = "multipart/form-data">');
        res.write('Xin chao: <intput type="file" name="filetupload"/><br>');
        res.write('<input type="submit"/>');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);