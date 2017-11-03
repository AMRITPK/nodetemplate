const express = require('express')
const app = express()

app.get('/', function (req, res) {

  res.sendFile('first.html', {root: __dirname })
})


app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
})
