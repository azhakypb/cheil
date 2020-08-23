const express = require('express')
const logger = require('morgan');
const cors = require('cors')
var mysql = require('mysql');
const app = express()
const port = 8000

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'cheil'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



let user = [];

app.post('/create', function(req, res) {
  const newUser = {
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
  };

  user.push(newUser);
  console.log(user);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})