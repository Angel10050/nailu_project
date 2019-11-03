"use strict";

function Home(app) {
  app.get("/api/login", (req, res, next) => {
    return res.json({
      data: "hola"
    });
  });
}

module.exports = Home;
