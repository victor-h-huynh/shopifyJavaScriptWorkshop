var socket = io();

$('form').on('submit',function() {
  var text = $('#message').val();
  socket.emit('message', text);
    $('#message').val('');
  return false;
});

$('form').on('submit',function() {
  var text = $('#initials').val();
  socket.emit('initials', text);
    $('#initials').val('');
    return false;
})

socket.on('message', function(msg) {
  $('<li>').text(msg).appendTo('#history');
})

socket.on('initials', function(msg) {
  $('<li>').text(msg).appendTo('#history')
})