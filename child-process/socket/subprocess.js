process.on('message', (m, socket) => {
  if (m === 'socket') {
    if (socket) {
      // 检查客户端套接字是否存在。
      // 套接字可能会在发送和在子进程中接收到它之间关闭。
      socket.end(`Request handled with ${process.argv[2]} priority`);
    }
  }
});