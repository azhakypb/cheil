const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    const user = { fullName: req.body.fullName, email: req.body.email, phone: req.body.phone };

    // db.collection('users').insert(user, (err, result) => {
    //   if (err) { 
    //     res.send({ 'error': 'An error has occurred' }); 
    //   } else {
    //     res.send(result.ops[0]);
    //   }
    // });
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})