const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// 第一个监听器
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// 第二个监听器
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// 第三个监听器
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

const emit = myEmitter.emit('event', 1, 2, 3, 4, 5);
console.log(emit);
