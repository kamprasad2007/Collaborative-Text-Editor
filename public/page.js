
var socket = io()
socket.on('doc', function(data) {
  var cm = CodeMirror.fromTextArea(document.getElementById('note'), {lineNumbers: false})
  cm.setSize(900, 300);
  m.setValue(data.str)
  var serverAdapter = new ot.SocketIOAdapter(socket)
  var editorAdapter = new ot.CodeMirrorAdapter(cm)
  var client = new ot.EditorClient(data.revision, data.clients, serverAdapter, editorAdapter)
})

function logout(){
   alert('Please temporarily use google signout button !')
}