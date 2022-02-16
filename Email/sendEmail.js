var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        email : '1danhvaythoi@gmail.com',
        password : 'nguyenvanhung'
    }
});

var mailOptions = {
    form : '1danhvaythoi@gmail.com',
    to : "hungnvse00535x@funix.edu.vn",
    subject : "Sending Email use node.js",
    text : 'That was easy'
};

transporter.sendMail(mailOptions, function(err, info) {
    if(err) {
        console.log("error");
    } else {
        console('Email sent: ' + info.response)
    }

});