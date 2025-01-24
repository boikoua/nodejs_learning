// делаем импорт модуля fs
const fs = require('fs');

// делаем импорт DNS

const dns = require('dns');

// функция для отслеживания таймингов
function timestamp() {
  return performance.now().toFixed(2);
}

console.log('Program start', timestamp());

setTimeout(() => console.log('Timeout 1', timestamp()), 0);
setTimeout(() => {
  process.nextTick(() => console.log('Next tick 2', timestamp()));
  console.log('Timeout 2', timestamp());
}, 100);

// записываем данные в файл асинхронно
fs.writeFile('./test.txt', 'Hello Node.js', () =>
  console.log('File written', timestamp())
);

Promise.resolve().then(() => console.log('Promise 1', timestamp()));

process.nextTick(() => console.log('Next tick 1', timestamp()));

setImmediate(() => console.log('Immediate 1', timestamp()));

let intervalCount = 0;
const intervalId = setInterval(() => {
  console.log(`Interval ${(intervalCount += 1)}`, timestamp());
  if (intervalCount === 2) {
    clearInterval(intervalId);
  }
}, 100);

dns.lookup('google.com', (err, address, family) => {
  console.log('DNS 1 google.com', address, timestamp());

  Promise.resolve().then(() => console.log('Promise 2', timestamp()));

  process.nextTick(() => console.log('Next tick 3', timestamp()));
});

console.log('Program end', timestamp());
