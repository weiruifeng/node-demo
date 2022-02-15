const http = require('http');

const server = http.createServer((req, res) => {
  // `req` 是 http.IncomingMessage，它是可读流。
  // `res` 是 http.ServerResponse，它是可写流。

  let body = '';
  // 以 utf8 字符串形式获取数据。
  // 如果未设置编码，则将接收缓冲区对象。
  req.setEncoding('utf8');

  // 一旦添加了监听器，则可读流就会触发 'data' 事件。
  req.on('data', (chunk) => {
    body += chunk;
  });

  // 'end' 事件表示已经接收到整个正文。
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // 给用户回写一些有趣的东西：
      res.write(typeof data);
      res.end();
    } catch (er) {
      // 哦哦！糟糕的 json！
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(1337);

// $ curl localhost:1337 -d "{}"
// object
// $ curl localhost:1337 -d "\"foo\""
// string
// $ curl localhost:1337 -d "not json"
// error: Unexpected token o in JSON at position 1s