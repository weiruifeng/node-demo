const process = require('process');
const fs = require('fs');

process.on('uncaughtException', (err, origin) => {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` +
    `Exception origin: ${origin}`
  );
});

setTimeout(() => {
  console.log('This will still run.');
}, 500);

// 故意引发异常，但不捕获。
nonexistentFunc();
console.log('This will not run.');