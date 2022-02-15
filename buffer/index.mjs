import { Buffer } from 'buffer';

// const buf = Buffer.alloc(5);

// console.log(buf);

const buf = Buffer.allocUnsafe(10);
console.log(buf);

buf.fill(0);

console.log(buf);
