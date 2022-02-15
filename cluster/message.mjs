import cluster from 'cluster';
import http from 'http';
import { cpus } from 'os';
import process from 'process';

if (cluster.isPrimary || cluster.isMaster) {

  // 跟踪 http 请求
  let numReqs = 0;
  setInterval(() => {
    console.log(`numReqs = ${numReqs}`);
  }, 10000);

  // 计数请求
  function messageHandler(msg) {
    if (msg.cmd && msg.cmd === 'notifyRequest') {
      numReqs += 1;
    }
  }

  // 启动工作进程并监听包含 notifyRequest 的消息
  const numCPUs = cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on('message', messageHandler);
  }

} else {
  // 工作进程具有 http 服务器。
  http.Server((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
    console.log(cluster.worker.id);
    // 通知主进程关于请求
    process.send({ cmd: 'notifyRequest' });
  }).listen(8000);
}