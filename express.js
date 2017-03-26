var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/json', function(req, res) {

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ a: 1 }));

})
 
app.listen(3000);