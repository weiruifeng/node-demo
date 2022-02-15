const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
// 只做一次，这样就不会永远循环
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // 在前面插入新的监听器
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
