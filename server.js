var express = require('express');
var app = express();

app.get('/hello', (req, res) => {
   res.send('Hello World!')
})

app.get('/bye', (req, res) => {
   res.send('Bye World!')
})

app.listen(3000);
console.log('Server running at http://localhost:3000/');
module.exports = app;
