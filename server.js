// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer  = require('multer');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('tmp'));
var upload = multer({ dest: 'tmp/' });

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//get upload file
app.post('/file/get', upload.single('userFile'), (req, res, next) => {
  //send json response if okay
  res.send({ "name": req.file.originalname, "size": req.file.size, "type": req.file.mimetype});
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
