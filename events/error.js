// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter { }

// const myEmitter = new MyEmitter();
// myEmitter.on('error', (err) => {
//   console.error('whoops! there was an error');
// });
// myEmitter.emit('error', new Error('whoops!'));

const { EventEmitter, errorMonitor } = require('events');

const myEmitter = new EventEmitter();
myEmitter.on(errorMonitor, (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));