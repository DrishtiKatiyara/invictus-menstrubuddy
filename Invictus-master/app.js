var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var http = require('http');
var bodyParser =  require('body-parser');
const { message } = require('statuses');
var nodemailer = require('nodemailer');
const multiparty = require("multiparty");
require("dotenv").config();

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

var con = mysql.createConnection({
    host: "https://menstrubuddy.herokuapp.com/",
    port: 3306,
    user: "root",
    password: "",
    database: "Invictus",
    multipleStatements: true
});

con.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected!");
  });

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(3000);

app.get('/about', function (req, res) {
    // res.sendFile(path.join(__dirname, '/views', '/login.ejs'));
    // message = '';
    res.render("about");
  });

  app.get('/blog', function (req, res) {
    // res.sendFile(path.join(__dirname, '/views', '/login.ejs'));
    // message = '';
    con.query("SELECT * FROM `Blogs`", function (error, result) {
        if (!!error) {
          console.log('Error in query');
          console.log(error);
        }
        else {
          console.log(result);
          obj = { print: result, req: req };
          console.log('successsss');
          res.render('blog', obj);
        }
      });

  });

  app.post('/addBlog',function (request, response) {
    name = request.body.Name
    blog = request.body.Blog
    console.log(name,blog)
    const userDetails = request.body;
    var sql = 'INSERT INTO `Blogs` SET ?'
    con.query(sql, userDetails, function (err, data) {
        if (err) throw err;
        console.log('Blog info inserted successfully');
    })
    response.redirect("/blog");
  });

  app.get('/contact', function (req, res) {
    // res.sendFile(path.join(__dirname, '/views', '/login.ejs'));
    traas = '';
    res.render("contact_us" , {message:traas, req:req});
  });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 587,
    // secure: true,
    service: 'Gmail',
    auth: {
      user: "katiyaradrishti@gmail.com", //Add your email
      pass: "katiyara1234", //Add your password
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  app.post('/contact', function (request, response) {
    name = request.body.name
    email = request.body.email
    subject = request.body.subject
    feedback = request.body.feedback
    console.log(name,email,subject,feedback);

    noTraas = "Form Submitted Successfully!";

    let form = new multiparty.Form();
    let data = {};
    form.parse(request, function (err, fields) {
        console.log(fields);
        // Object.keys(fields).forEach(function (property) {
        //     data[property] = fields[property].toString();
        // });
        // console.log(data);
    });
    data = {name: name, email: email, subject: subject, feedback: feedback}
    console.log(data)
    const mail = {
        sender: `${name} <${email}>`,
        to: 'katiyaradrishti@gmail.com',
        subject: `Feedback from ${name}`,
        text: `Name : ${name} \nEmail : ${email}\n\n${feedback}`,
      };
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            message = "Something went wrong!"
            response.render("contact_us", {message:message, request:request});
          } else {
            message = "Thank you for your feedback...we will get back to you shortly!"
            console.log(message);
            response.render("contact_us", {message:message, request:request});
          }
    });

    response.render("contact_us", {message:noTraas,request:request});
  });

  app.get('/',function(req,res){
      res.render("home",{message:'',req:req});
  });

  app.post('/askQuery',function(req,res){
    name = req.body.name;
    phone = req.body.phone;
    email = req.body.email;
    query = req.body.query;

    console.log(name,phone,email,query);

    const mail = {
        sender: `${name} <${email}>`,
        to: '2019dhruvisha.mondhe@ves.ac.in',
        subject: `Query from ${name}`,
        text: `Name : ${name} \nEmail : ${email} \nPhone : ${phone} \n\n${query}`,
      };
      transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            message = "Something went wrong!"
            response.render("contact_us", {message:message, request:request});
          } else {
            message = "Thank you for your feedback...we will get back to you shortly!"
            console.log(message);
            response.render("contact_us", {message:message, request:request});
          }
    });
    home_message = "Your Query has been submitted successfully!"
    res.render('home',{message: home_message, req:req});
  });

  app.get('/chatBot',function(req,res){
      res.render('chatbot');
  })
  
  app.get('/drives',function(req,res){
      res.render("drive1",{message:'',req:req})
  })
  app.post('/addVolunteer', function(req,res){
      name = req.body.name;
      phone = req.body.phone;
      email = req.body.email;
      drive = req.body.drive;
      console.log(name,phone,email,drive);
      const userDetails = req.body;
      var sql = 'INSERT INTO `Volunteers` SET ?'
      con.query(sql, userDetails, function (err, data) {
      if (err) throw err;
      console.log('Volunteer info inserted successfully');
    })

      res.render("drive1", {message:'Response submitted successfully!',req:req});
  })
app.listen(3000, function () {
    console.log('Listening to port 3000');
});
