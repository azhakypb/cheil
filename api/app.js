const express = require('express')
const logger = require('morgan');
const cors = require('cors')
const app = express()
const port = 8000

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

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