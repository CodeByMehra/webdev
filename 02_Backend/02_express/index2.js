const http = require(`HTTP`);

var server=http.createserver(function(req, res){
    res.end= "Yeah it working"
});

server.listen(3000);