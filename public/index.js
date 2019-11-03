const clientID = ""+new Date().getTime()+Math.floor(Math.random()*100000)
var testObj = {"clientId":clientID}
var testAnswer = JSON.stringify(testObj)
var socket = new WebSocket(`ws://${location.host}/`);
var game = new Game()
var controller = new Controller()

socket.onopen = function() {
    console.log("connected");
    //this.send(testAnswer);
  };
  
  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log('Server closed connection');
    } else {
      console.log('Connection faild'); 
    }
    console.log('Code: ' + event.code + ' Reason: ' + event.reason);
  };
  
  socket.onmessage = function(event) {
    var data = JSON.parse(event.data)
    console.log(data);
    controller.addBall(data)
  };
  
  socket.onerror = function(error) {
    alert("Error " + error.message);
  };

 