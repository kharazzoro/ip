const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html
app.use(express.static("public", { 'extensions': ['html'] }));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var myIp = "";
(
  function (loading, success) {
    var xhr = XMLHttpRequest !== undefined ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    loading.apply(null, []);
    xhr.open('get', 'https://api.ipify.org/?format=json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        success.call(null, JSON.parse(xhr.responseText));
      }
    }
    xhr.send();
  }(function () {
  }, function (response) {
    myIp = response.ip;
    console.log(myIp)

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wafa.1998.13.2018@gmail.com',
    pass: 'wafa2015'
  }
});

let ipAddress="My Ip:"+myIp;
 var mailOptions = {
  from: 'wafa.1998.13.2018@gmail.com',
  to: 'wafa.1998.13.2017@gmail.com',
  subject: 'Sending Email using Node.js',
  text:ipAddress
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


  }));




app.get('/', function (req, res) {
  res.render('index', { myIp: myIp });
});



// what does this line mean: process.env.PORT || 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
