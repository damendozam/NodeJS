const express = require('express')
const app = express()


app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
