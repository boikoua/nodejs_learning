const fs = require('fs');

// Асинхронный метод для чтения файла
fs.readFile('./test.txt', 'utf-8', (error, data) => {
  if (error) {
    console.error('Ошибка чтения файла:', error.message);
    return;
  }

  // Метод для создания новой папки
  fs.mkdir('./files', { recursive: true }, (error) => {
    if (error) {
      console.error('Ошибка создания папки:', error.message);
      return;
    }

    // Метод создания нового файла и записи в него информации
    fs.writeFile(
      './files/test.txt',
      `${data} \nNew text for test2.txt`,
      (error) => {
        if (error) {
          console.error('Ошибка записи в файл:', error.message);
        } else {
          console.log('Файл успешно создан и записан!');
        }
      }
    );
  });

  console.log('Данные из файла:', data);
});

// Удаление файлов и папок
setTimeout(() => {
  if (fs.existsSync('./files/test.txt')) {
    fs.unlink('./files/test.txt', () => {});
  }
}, 4000);

setTimeout(() => {
  // проверка на существования элементов
  if (fs.existsSync('./files')) {
    fs.rm('./files', { recursive: true, force: true }, () => {});
  } else {
    console.log('ERROR');
  }
}, 7000);
