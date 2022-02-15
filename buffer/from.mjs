import { Buffer } from 'buffer';

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 与 `arr` 共享内存。
const buf = Buffer.from(arr.buffer);

console.log(buf);
// 打印: <Buffer 88 13 a0 0f>

// 更改原始的 Uint16Array 也会更改缓冲区。
arr[1] = 6000;

console.log(buf);
// 打印: <Buffer 88 13 70 17>
