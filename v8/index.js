const v8 = require('v8');

console.log(v8.cachedDataVersionTag());
v8.setFlagsFromString('--allow_natives_syntax');
console.log(v8.cachedDataVersionTag());