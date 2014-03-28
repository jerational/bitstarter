var express = require('express');
var app = express();

app.use(express.logger());

var content = fs.readFileSync('index.html');
var String = content.toString();



app.get('/', function(request, response) {
    response.send(String);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});