const express = require('express');
const app = express();
const router = express.Router();
const port = 3001;
const pgp = require('pg-promise')();
const db = pgp('postgres://arrm@localhost:5432/animales');

                          // MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:1, animal: "lion"},
    {id:2, animal: "panda"}
  ]);
});

module.exports = app;

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))
