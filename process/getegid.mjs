import process from 'process';

if (process.getegid) {
  console.log(`Current gid: ${process.getegid()}`);
}

if (process.geteuid) {
  console.log(`Current uid: ${process.geteuid()}`);
}

if (process.getgid) {
  console.log(`Current gid: ${process.getgid()}`);
}

if (process.getgroups) {
  console.log(process.getgroups()); // [ 16, 21, 297 ]
}

if (process.getuid) {
  console.log(`Current uid: ${process.getuid()}`);
}