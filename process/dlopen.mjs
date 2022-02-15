import { dlopen } from 'process';
import { constants } from 'os';
import { fileURLToPath } from 'url';

const module = { exports: {} };
dlopen(module, fileURLToPath(new URL('local.node', import.meta.url)),
  constants.dlopen.RTLD_NOW);
module.exports.foo();