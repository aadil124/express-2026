// const express = require("express");

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>This is home page</h1>`);
});
app.get("/about", (req, res) => {
  res.send(`<h1>This is about page</h1>`);
});

app.listen(3200);
