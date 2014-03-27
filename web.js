var express = require('express');
var app = express();
var bufferReading;
app.use(express.logger());
//var bufferReading;
/*fs.readFileSync('index.html', function(err, data) {
    if (err) throw err;
    var buffer = new Buffer(data);

    bufferReading = buffer.toString();
}
*/	   
//console.log(bufferReading);
app.get('/', function(request, response) {
    response.send("I am so confused");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});