const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);

n.on('message', (m) => {
  console.log('PARENT got message:', m);
});

// 引起子进程打印：CHILD got message: { hello: 'world' }
n.send({ hello: 'world' });