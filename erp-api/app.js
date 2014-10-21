var express = require("express");
var config = require("erp-config");
var routes = require("./routes");

var app = express();
routes.configure(app, express.Router());

app.set('port', config.apiPort);

app.listen(app.get('port'), function () {
  console.log('API application is listening on port ' + app.get('port'));
});

module.exports = app;