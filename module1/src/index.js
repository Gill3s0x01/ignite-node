const { request, response } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.send("hello world! - Fundamentos node js");
});

app.listen(3333);
