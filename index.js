const express = require('express');
const path = require('path');

const app = express()
const port = 6500


const server = require('http').Server(app);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(
  "/assets",
  express.static(path.join(__dirname, "dist", "assets"))
);

app.use(
  "/images",
  express.static(path.join(__dirname, "dist", "images"))
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

server.listen(port, function () {
  console.debug(`listening on port ${port}`);
});