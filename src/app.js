const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "img.html");
});

app.post('/', function (req, res) {

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
          user:'workrough101@gmail.com',
          pass:'hello123*A'
    }
});


var mailOptions = {
    from:'workrough101@gmail.com',
    to : req.body.email,
    subject : req.body.subject,
    text  : req.body.txta
};

transporter.sendMail(mailOptions , function(err,info){
    if(err){
        console.log(err);
    }
    else{
        console.log('Email Sent :' + info.response);
        res.send("Email sended");
    }
});

});

app.listen(port , () => {
    console.log(`server is running at port no ${port}`);
});