var express       = require('express');
var app           = express.createServer();

app.configure( function(){
  app.set('views', __dirname + '/views');
  app.use(express.static(__dirname + '/public'));

  //app.use(app.router);
  //app.use(express.bodyParser());
});

app.get("/", function (req,res) {
  res.send('hello world');
});

//// Pusher auth
//var Pusher = require('./node-pusher');
//var pusher = new Pusher({
//  appId:  '8771',
//  key:    'a553813b71932b8355e4',
//  secret: '029614202093c5ccba8d'
//});
//
//
//
//
//
//app.post('/pusher/auth', function(req, res){
//  var channelData = {
//    user_id: Math.floor(Math.random()*100), 
//    user_info: {name: req.session._barnyrd_user, animal:( req.session._barnyrd_animal||'horse')}
//  };
//  res.send( pusher.auth(req.param('socket_id'), 
//    req.param('channel_name'), 
//    channelData));
//});

// Server

app.listen(8000, function(err) {
  if (err) { throw err; }
});

//process.on('uncaughtException', function(err) {
//  console.log(JSON.stringify(err));
//});
