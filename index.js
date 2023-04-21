var express = require('express');
var env = require('dotenv').config()
var ejs = require('ejs');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const port = process.env.port || 8000;
app.use(express.static("public"))
app.set("views","./views")
app.set("view engine", "ejs");

app.use('/css',express.static(path.join(__dirname, "public/css")));
app.use('/js',express.static(path.join(__dirname, "public/js")));
app.use('/images',express.static(path.join(__dirname, "public/images")));
mongoose.connect('mongodb://localhost:27017/LoginUser', {
useNewUrlParser: true,
useUnifiedTopology: true
}, (err) => {
if (!err) {
    console.log('MongoDB Connection Succeeded.');
} else {
    console.log('Error in DB connection : ' + err);
}
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/about", (req, res) => {
    res.render("about"); // tour refers to tour.ejs
});
app.get("/index", (req, res) => {
  res.render("index"); // tour refers to tour.ejs
});
app.get("/contact", (req, res) => {
  res.render("contact"); // tour refers to tour.ejs
});
app.get("/courses", (req, res) => {
    res.render("courses"); // service refers to service.ejs
});
app.get("/home", (req, res) => {
  res.render("home"); // service refers to service.ejs
});
app.get("/log", (req, res) => {
    res.render("log"); // index refers to contactus.ejs
});
app.get("/profile", (req, res) => {
  res.render("profile"); // index refers to contactus.ejs
});
app.get("/signup", (req, res) => {
  res.render("signup"); // index refers to contactus.ejs
});
app.get("/teachers", (req, res) => {
    res.render("teachers"); // index refers to contactus.ejs
  });
app.get("/update", (req, res) => {
    res.render("update"); // index refers to contactus.ejs
});
app.get("/Architect", (req, res) => {
  res.render("Architect"); // index refers to contactus.ejs
});
  app.get("/CA", (req, res) => {
    res.render("CA"); // index refers to contactus.ejs
  });
  app.get("/chef", (req, res) => {
    res.render("chef"); // index refers to contactus.ejs
  });
  app.get("/Dt", (req, res) => {
    res.render("Dt"); // index refers to contactus.ejs
  });  
  app.get("/fashion", (req, res) => {
    res.render("fashion"); // index refers to contactus.ejs
  });
  app.get("/gamer", (req, res) => {
    res.render("gamer"); // index refers to contactus.ejs
  });
  app.get("/lawyer", (req, res) => {
    res.render("lawyer"); // index refers to contactus.ejs
  });
  app.get("/photographer", (req, res) => {
    res.render("photographer"); // index refers to contactus.ejs
  });
  app.get("/Physician", (req, res) => {
    res.render("Physician"); // index refers to contactus.ejs
  });
  app.get("/pilot", (req, res) => {
    res.render("pilot"); // index refers to contactus.ejs
  });
  app.get("/SocialInf", (req, res) => {
    res.render("SocialInf"); // index refers to contactus.ejs
  });
  app.get("/vedioEditor", (req, res) => {
    res.render("vedioEditor"); // index refers to contactus.ejs
  });
  app.get("/che", (req, res) => {
    res.render("che"); // index refers to contactus.ejs
  });
  app.get("/chart", (req, res) => {
    res.render("chart"); // index refers to contactus.ejs
  });
  app.get("/pilo", (req, res) => {
    res.render("pilo"); // index refers to contactus.ejs
  });
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
    mongooseConnection: db
    })
}));


var server = require('./routes/server');
app.use("/", server);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log('Server is listening on:'+PORT);
});