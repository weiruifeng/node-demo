import { nextTick } from 'process';

console.log('start');
nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');
