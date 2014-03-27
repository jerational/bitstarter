var express = require('express');
var app = express();
var bufferReading;
app.use(express.logger());

fs.readFile('index.html', function(err, data) {
    var buffer = new Buffer(data);

    bufferReading = buffer.toString();
}
app.get('/', function(request, response) {
  response.send(bufferReading);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});