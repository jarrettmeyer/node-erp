var express = require("express");
var config = require("erp-config");

module.exports = function (router) {

  router.get("/", function (req, res) {
    res.json({
      ok: true,
      api: config.apiBaseUrl,
      timestamp: Date.now()
    });
  });

  return router;

};