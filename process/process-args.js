const { argv } = require('process');

// 打印 process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
