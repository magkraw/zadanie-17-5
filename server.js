var express = require('express');
var app = express();

app.use(express.static('assets'));

app.use('/store', function(req, res, next) {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});

app.get('/store', function(req, res) {
  res.send('Oto jest sklep')
});

app.get('/', function (req, res) {
  res.sendFile('/index.html')
});

app.get('/userform', function (req, res) {
  const response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  res.end(JSON.stringify(response));
});

app.use(function (req, res, next) {
  res
    .status(404)
    .send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});

app.listen(3000, 'localhost', function() {
  var host = this.address().address;
  var port = this.address().port;

  console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});
