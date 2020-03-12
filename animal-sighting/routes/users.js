var express = require('express');
var app = express();
const port = 3001;
const pgp = require('pg-promise')();
const db = pgp('postgres://arrm@localhost:5432/animales');

/* GET users listing. */
app.get('/users', function(req, res, next) {
  res.json([
    {id:1, animal: "lion"},
    {id:2, animal: "panda"}
  ]);
});

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))
module.exports = app;

