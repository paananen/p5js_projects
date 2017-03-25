// ---RUN---
// npm init
// npm install --save express
// node index.js

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
  console.log('URL: http://localhost:' + port);
});

app.use(express.static('public'));
