// const express = require("express");

import express from "express";
import home from "./pages/home.js";
import about from "./pages/about.js";
import contact from "./pages/contact.js";
import login from "./pages/login.js";
import submit from "./pages/submit.js";
// import path from "path";
import { absPath } from "./common.js";

// const absPath = path.resolve("view");

const app = express();

app.get("/", (req, res) => {
  // res.send(home());
  console.log("pppp", absPath);
  res.sendFile(`${absPath}/home.html`);
});
app.get("/about", (req, res) => {
  res.send(about());
});
app.post("/submit", (req, res) => {
  res.send(submit());
});
app.get("/login", (req, res) => {
  res.send(login());
});
app.get("/contact", (req, res) => {
  res.send(contact());
});
app.use((req, res) => {
  res.status(404).sendFile(`${absPath}/404.html`);
});

app.listen(3200);
