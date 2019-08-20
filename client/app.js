
function isInitialsGoodFormat(initials){
  if(initials.length == 0 ||initials.length > 2 ){
    socket.emit("error","#initials");
  }  
}

function isMessageGoodFormat(message){
  if(message.length == 0){
    socket.emit("error","#message");
  }  
}

var socket = io();

$('form').on('submit',function() {
  var message = $('#message').val();
  var initials = $('#initials').val();
  isInitialsGoodFormat(initials);
  isMessageGoodFormat(message);
  var text = initials + " says : "   +message;
  socket.emit('message', text);
    $('#message').val('');
    $('#initials').val('');
  return false;
});

// $('form').on('submit',function() {
//   var text = $('#initials').val();
//   socket.emit('initials', text);
//     $('#initials').val('');
//     return false;
// })

socket.on('message', function(msg) {
  $('<li>').text(msg).appendTo('#history');
})

socket.on('error', function(id) {
  console.log(id);
  $(id).css('background-color', 'red');
})
// socket.on('initials', function(msg) {
//   $('<li>').text(msg).appendTo('#history')
// })VH says :VH says :