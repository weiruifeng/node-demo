import { unlink } from 'fs/promises';

try {
  await unlink('./hello');
  console.log('successfully deleted /tmp/hello');
} catch (error) {
  console.error('there was an error:', error.message);
}