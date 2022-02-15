import { cpuUsage } from 'process';
const startUsage = cpuUsage();
const now = Date.now();
while (Date.now() - now < 500);
console.log(cpuUsage(startUsage));