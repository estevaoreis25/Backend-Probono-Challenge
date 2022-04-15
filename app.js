const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.status(200).send({
    message: 'It is working'
  });
});

module.exports = app;