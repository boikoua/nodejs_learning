const fs = require('fs');

let isRunning = true;

setTimeout(() => {
  isRunning = false;
}, 10);

function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve());
  });
}

async function whileLoop() {
  while (isRunning) {
    console.log('While loop in running...');
    await setImmediatePromise();
  }
}

whileLoop().then(() => console.log('While Loop ended'));
