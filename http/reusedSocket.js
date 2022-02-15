const http = require('http');

// 服务器默认有 5 秒保持活动超时
http
  .createServer((req, res) => {
    res.write('hello\n');
    res.end();
  })
  .listen(3000);

setInterval(() => {
  // 调整保持活动代理
  http.get('http://localhost:3000', (res) => {
    res.on('data', (data) => {
      // 什么都不做
    });
  });
}, 5000); // 以 5 秒的间隔发送请求，因此很容易达到空闲超时