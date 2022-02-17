const inspector = require('inspector');
const http = require('http');

let isOpend = false;

function getHTML() {
  return `<html>
      <meta charset="utf-8" />
      <body>
        复制到新 Tab 打开该 URL 开始调试 devtools://devtools/bundled/js_app.html?experiments=true&v8only=true&ws=${inspector.url().replace("ws://", '')}
      </body>
    </html>`;
}

http.createServer((req, res) => {
  if (req.url == '/debug/open') {
    // 还没开启则开启
    if (!isOpend) {
      isOpend = true;
      // 打开调试器
      inspector.open();
      debugger;
    }
    // 返回给前端的内容
    const html = getHTML();
    res.end(html);
  } else if (req.url == '/debug/close') {
    // 如果开启了则关闭
    if (isOpend) {
      inspector.close();
      isOpend = false;
    }
    res.end('ok');
  } else {
    res.end('ok');
  }
}).listen(80);