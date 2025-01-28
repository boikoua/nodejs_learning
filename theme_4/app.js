// работа с потоками nodeJS
const fs = require('fs');

// сжатие
const zlib = require('zlib');

// читающий поток
const readStream = fs.createReadStream('./docs/text.txt');

// пишущий поток
const writeStream = fs.createWriteStream('./docs/new-text.txt');

// сжимающий поток
const compressStream = zlib.createGzip();

// // метод читающего потока
// readStream.on('data', (chunk) => {
//   // отслеживаем передачу данных порционно
//   writeStream.write('\n---CHUNK START---\n');

//   // записываем частями поток в новый файл, тоесть делаем полную копию файла
//   writeStream.write(chunk);

//   // отслеживаем передачу данных порционно
//   writeStream.write('\n---CHUNK END---\n');
// });

// делаем функцию отлова ошибок при чтении или записи
const handleError = () => {
  console.log('Error');
  // если будет ошибка, то ломаем поток и прекращаем его запись
  readStream.destroy();
  writeStream.end('Finished with error...');
};

// аналогичный метод, для более короткой записи
readStream
  .on('error', handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on('error', handleError);
