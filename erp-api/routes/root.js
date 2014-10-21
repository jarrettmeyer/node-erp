var express = require("express");

module.exports = function (router) {

  router.get("/", function (req, res) {
    res.json({
      ok: true,
      timestamp: Date.now()
    });
  });

  return router;

};