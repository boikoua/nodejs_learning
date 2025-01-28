const http = require('http');

// модуль для работы с файловой системой
const fs = require('fs');

// модуль для формирования пути и работой с путями
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Ответ от сервера');

  res.setHeader('Content-Type', 'text/html');

  // функция для формирования страницы
  const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

  let basePath = '';

  switch (req.url) {
    case '/':
    case '/home':
    case '/index.html':
      basePath = createPath('index');
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/contacts');
      res.end();
    case '/contacts':
      basePath = createPath('contacts');
      res.statusCode = 200;
      break;
    default:
      basePath = createPath('error');
      res.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      // читаем документ
      res.write(data);

      // всегда завершаем ответ
      res.end();
    }
  });
});

server.listen(PORT, 'localhost', (error) => {
  error ? console.log('error') : console.log(`listening port ${PORT}`);
});
