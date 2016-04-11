var Handlers = require('./handlers');

var heartbeat;
var watchdog;

var cdo1State = {
  message: 'heartbeat',
  direction: 10,
  power: 20,
  voltage: 30,
  lastUpdate: new Date(),
  connections: 0,
  driver: "marius",
  driverId: ''
};

exports.register = function (server, options, next) {

  function udpateClients(telemetry) {
    if (!telemetry) {
      cdo1State.lastUpdate = new Date();
    }
    io.sockets.emit('heartbeat', cdo1State);
  }

  function driverTimeout() {
    var now = new Date();
    if ((now - cdo1State.lastUpdate > 10000) && (cdo1State.driverId !== '')) {
      console.log('Driver timeout');
      cdo1State.driverId = '';
      cdo1State.driver = '';
      udpateClients();
    }
  }

  var io = require('socket.io')(server.listener);

  io.on('connection', function (socket) {

    console.log('New connection!');
    cdo1State.connections++;

    if (!watchdog) {
      watchdog = setInterval(function() {
        driverTimeout();
      }, 5000);
    }

    socket.emit("log-message", {
      message: "Hello from Hapi!"
    });

    socket.on('disconnect', function(){
      cdo1State.connections--;
    });

    socket.on('echo', function(msg){
      console.log('echo ' + msg);
      socket.emit("echo", msg);
    });

    socket.on('control-message', function(msg){
      if (cdo1State.driverId === socket.id) {
        cdo1State.driver = msg.driver;
        if ((cdo1State.direction !== msg.direction) || (cdo1State.power !== msg.power)) {
          cdo1State.direction = msg.direction;
          cdo1State.power = msg.power;
          udpateClients();
        }
      }
    });

    socket.on('control-request', function(msg){
      if (cdo1State.driverId === '') {
        cdo1State.driverId = socket.id;
        cdo1State.driver = msg.driver;
        cdo1State.direction = msg.direction;
        cdo1State.power = msg.power;
        console.log('New driver: ' + msg.driver);
        udpateClients();
      }
    });

    socket.on('telemetry', function(msg){
      console.log('Update from cdo1');
      udpateClients(true);
    });

  });

  next();
};

exports.register.attributes = {
  name: 'hapi-chat'
};
