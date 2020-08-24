const express = require('express')
const logger = require('morgan');
const cors = require('cors')
var mysql = require('mysql');
const app = express()
const port = 8000

var con = mysql.createConnection({
  host: "",         //в основном localhost
  user: "",         //по стандарту root
  password: "",     //your password
  database: "cheil" //должна быть существующая бд
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


app.post('/create', function(req, res) {
  var createUser = {
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone
  }

 con.query('INSERT INTO user SET ?', createUser, function (err, resp) {
  if (err) throw err;
  // if there are no errors send an OK message.
  res.send('Saved succesfully');
});
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})