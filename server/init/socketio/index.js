// var Handlers = require('./handlers');

exports.register = function (server, options, next) {

  var io = require('socket.io')(server.listener);

  io.on('connection', function (socket) {

    console.log('New connection!');

    socket.emit("log-message", {
      message: "Hello from Hapi!"
    });

    socket.on('new-subscriber', function( data ) {
      console.log('new-subscriber');
      console.log(data);
      socket.broadcast.emit( 'new-subscriber', data );
    });

    socket.on('statechanged', function( data ) {
      console.log('statechanged');
      console.log(data);
      delete data.state.overview;
      socket.broadcast.emit( 'statechanged', data );
    });

    socket.on('multiplex-statechanged', function( data ) {
      console.log('multiplex-statechanged');
      console.log(data);
      if (typeof data.secret == 'undefined' || data.secret == null || data.secret === '') return;
      //if (createHash(data.secret) === data.socketId) {
        data.secret = null;
        socket.broadcast.emit(data.socketId, data);
      //};
    });

    socket.on('statechanged-speaker', function( data ) {
      console.log('statechanged-speaker');
      console.log(data);
      delete data.state.overview;
      socket.broadcast.emit( 'statechanged-speaker', data );
    });

    socket.on('disconnect', function(){
      console.log('Connection lost');
    });

    socket.on('echo', function(msg){
      console.log('echo ' + msg);
      socket.emit("echo", msg);
    });

  });

  next();
};

exports.register.attributes = {
  name: 'hapi-chat'
};
