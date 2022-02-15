const subprocess = require('child_process').fork('subprocess.js');

// 打开服务器对象并发送句柄。
const server = require('net').createServer();
server.on('connection', (socket) => {
  socket.end('handled by parent');
});
server.listen(1337, () => {
  subprocess.send('server', server);
});
