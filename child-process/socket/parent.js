const { fork } = require('child_process');
const normal = fork('subprocess.js', ['normal']);
const special = fork('subprocess.js', ['special']);

// 打开服务器并将套接字发送给子进程。
// 使用 pauseOnConnect 防止套接字在发送到子进程之前被读取。
const server = require('net').createServer({ pauseOnConnect: true });
server.on('connection', (socket) => {

  // 如果这是 special 优先级...
  if (socket.remoteAddress === '74.125.127.100') {
    special.send('socket', socket);
    return;
  }
  // 这是 normal 优先级。
  normal.send('socket', socket);
});
server.listen(1337);