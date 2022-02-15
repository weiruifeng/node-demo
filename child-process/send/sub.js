process.on('message', (m) => {
  console.log('CHILD got message:', m);
});

// 引起父进程打印：PARENT got message: { foo: 'bar', baz: null }
process.send({ foo: 'bar', baz: NaN });