process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env.NTBA_FIX_319 = 1;

var express = require('express');
var path = require('path');
var app = express();
var expressWs = require('express-ws')(app);
var Global = require('./global')

app.use(express.static(path.join(__dirname, 'public')));

var users = new Global()

app.ws('/', function (ws, req) {
  const id = users.addClient(ws) - 1
  ws.on('message', function (msg) {
    users.getNextWS(id).send(msg);
  });
  console.log('socket', req.testing);
  ws.on('close', function () {
    users.deleteWS(id)
  })
});

app.listen(3001, function () {
  console.log('Example app listening on port ' + 3001);
});

module.exports = app;