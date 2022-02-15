const http = require('http');
http.get({
  hostname: 'localhost',
  port: 80,
  path: '/',
  agent: false  // 仅为这个请求创建新代理
}, (res) => {
  console.log(res);
});