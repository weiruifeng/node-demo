const http = require('http');
const inspector = require('inspector');
const fs = require('fs');

function getCpuprofile(req, res) {
  // 打开一个和 V8 Inspector 的会话
  const session = new inspector.Session();
  session.connect();
  // 向V8 Inspector 提交命令，开启 Cpu Profile 并收集数据
  session.post('Profiler.enable', () => {
    session.post('Profiler.start', () => {
      // 收集一段时间后提交停止收集命令
      setTimeout(() => {
        session.post('Profiler.stop', (err, { profile }) => {
          // 把数据写入文件
          if (!err) {
            fs.writeFileSync('./profile.cpuprofile', JSON.stringify(profile));
          }
          // 断开会话
          session.disconnect();
          // 回复客户端
          res.end('ok');
        });
      }, 3000)
    });
  });
}

http.createServer((req, res) => {
  if (req.url == '/debug/getCpuprofile') {
    getCpuprofile(req, res);
  } else {
    res.end('ok');
  }
}).listen(80);