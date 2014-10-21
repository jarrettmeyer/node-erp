var root = require("./root");

module.exports = {

  configure: function (app, router) {
    app.use('/api', root(router));
  }

};
